import React, { useMemo } from 'react'
import { useLiveData$ } from './data-stream/data-stream.js'
import { useGetLinearScaleFn, useGetUtcScaleFn } from './line-chart/scales.js'
import BottomTimeAxis from './line-chart/bottom-time-axis/bottom-time-axis.js'
import LeftValueAxis from './line-chart/left-value-axis/left-value-axis.js'
import SvgLine from './line-chart/svg-line.js'
import CasualtyEventLines from './line-chart/causalty-event-lines.js'
import Controls from './controls/controls.js'
import NotableEvents from './notable-events/notable-events.js'

export default function CovidChart({ margin, width, height }) {
  const { lineChartData, dataForCurrentDay, releventEvents = [], lastDay, percentage = 0 } = useLiveData$()
  const yAxisMax = getYAsixMax(releventEvents)
  const xScale = useGetUtcScaleFn({
    margin,
    domainFn: xDomainFn,
    data: lineChartData,
    width,
    height,
    scaleMax: lastDay,
  })
  const yScale = useGetLinearScaleFn({
    margin,
    domainFn: deathsFn,
    data: lineChartData,
    scaleMax: yAxisMax,
    width,
    height,
  })
  const deathPoints = useLineChartPoints(xScale, yScale, lineChartData, xDomainFn, deathsFn)
  const dead = dataForCurrentDay?.death || 0
  return (
    <div className="max-w-full max-h-full">
      <Controls />
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="text-xl">{dead.toLocaleString()} Dead Americans from COVID-19</h1>
        <div>{dataForCurrentDay && dataForCurrentDay.date.toLocaleString()}</div>
      </div>
      <svg viewBox={[0, 0, width, height]}>
        <defs>
          <linearGradient id="myGradient">
            <stop offset={`${percentage}%`} stopColor="#8A0707" />
            <stop offset={`${percentage}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        <LeftValueAxis scale={yScale} translateX={margin.left} />
        <BottomTimeAxis
          scale={xScale}
          translateY={height - margin.bottom}
          marginLeft={margin.left}
          width={width - margin.right}
        />
        {true && <CasualtyEventLines dead={dead} releventEvents={releventEvents} xScale={xScale} yScale={yScale} />}
        <SvgLine points={deathPoints} stroke={'url(#myGradient)'} />
      </svg>
      <NotableEvents
        height={100}
        currentDay={dataForCurrentDay ? dataForCurrentDay.date : undefined}
        xScale={xScale}
        marginLeft={margin.left}
        width={width - margin.right}
        marginRight={margin.right}
      />
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
