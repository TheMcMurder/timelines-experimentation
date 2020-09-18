import React, { useMemo } from 'react'
import { useLiveData$ } from './data-stream/data-stream.js'
import { useGetLinearScaleFn, useGetUtcScaleFn } from './line-chart/scales.js'
import BottomTimeAxis from './line-chart/bottom-time-axis/bottom-time-axis.js'
import LeftValueAxis from './line-chart/left-value-axis/left-value-axis.js'
import SvgLine from './line-chart/svg-line.js'
import WarLines from './line-chart/war-lines.js'

export default function CovidChart({ margin, width, height }) {
  const { data, releventWars = [], lastDay } = useLiveData$()
  const yAxisMax = getYAsixMax(releventWars)
  const [latest] = data.slice(-1)
  const xScale = useGetUtcScaleFn({ margin, domainFn: xDomainFn, data, width, height, scaleMax: lastDay })
  const yScale = useGetLinearScaleFn({ margin, domainFn: deathsFn, data, scaleMax: yAxisMax, width, height })
  const deathPoints = useLineChartPoints(xScale, yScale, data, xDomainFn, deathsFn)
  const dead = latest?.death || 0
  return (
    <div>
      <div className="flex w-100 justify-center items-center">
        <h1 className="text-xl">{dead.toLocaleString()} Dead from COVID-19</h1>
      </div>
      <svg viewBox={[0, 0, width, height]}>
        <LeftValueAxis scale={yScale} translateX={margin.left} />
        <BottomTimeAxis
          scale={xScale}
          translateY={height - margin.bottom}
          marginLeft={margin.left}
          width={width - margin.right}
        />
        {true && <WarLines releventWars={releventWars} xScale={xScale} yScale={yScale} />}
        <SvgLine points={deathPoints} stroke={'#8A0707'} />
      </svg>
    </div>
  )
}

function xDomainFn(d) {
  return d.date
}

function deathsFn(d) {
  return d.death || 0
}

function infectionsFn(d) {
  return d.positive || 0
}

function useLineChartPoints(xScale, yScale, data, xDomainFn, yDomainFn) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(xDomainFn(d)), yScale(yDomainFn(d))]
    })
  }, [data, xScale, yScale])
}

function getYAsixMax(releventWars) {
  if (!releventWars || releventWars.length === 0) {
    return undefined
  } else {
    const [last] = releventWars.slice(-1)
    return releventWars && last ? last.dead : undefined
  }
}
