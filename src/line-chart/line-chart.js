import React, { useMemo, useState, useEffect } from 'react'
import { scaleLinear, scaleUtc, max, extent } from 'd3'
import BottomTimeAxis from './bottom-time-axis/bottom-time-axis.js'
import LeftValueAxis from './left-value-axis/left-value-axis.js'
import SvgLine from './svg-line.js'

export default function LineChart({ data, margin, height, width, xDomainFn, yDomainFn, yAxisMax }) {
  const xScale = useMemo(
    () =>
      scaleUtc()
        .domain(extent(data, xDomainFn))
        .range([margin.left, width - margin.right]),
    [data, margin.left, margin.right, width],
  )
  const yScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, yAxisMax ? yAxisMax : max(data, yDomainFn)])
        .nice()
        .range([height - margin.bottom, margin.top]),
    [data, margin.bottom, height, margin.top],
  )

  const points = useLineChartPoints(xScale, yScale, data, xDomainFn, yDomainFn)

  return (
    <div>
      <svg viewBox={[0, 0, width, height]}>
        <SvgLine points={points} />
        <LeftValueAxis scale={yScale} translateX={margin.left} />
        <BottomTimeAxis
          scale={xScale}
          translateY={height - margin.bottom}
          marginLeft={margin.left}
          width={width - margin.right}
        />
      </svg>
    </div>
  )
}

function useLineChartPoints(xScale, yScale, data, xDomainFn, yDomainFn) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(xDomainFn(d)), yScale(yDomainFn(d))]
    })
  }, [data, xScale, yScale])
}
