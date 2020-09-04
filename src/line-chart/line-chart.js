import React, {useMemo, useCallback, useRef, useLayoutEffect} from 'react'
import {
  select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleUtc,
  scaleTime,
  max,
  extent
} from 'd3';
import BottomTimeAxis from '../bottom-time-axis/bottom-time-axis.js'
import LeftValueAxis from '../left-value-axis/left-value-axis.js'
import SvgLine from './svg-line.js'

const dataIn = [
  {date: '2007-04-24', value: 1},
  {date: '2007-04-25', value: 2},
  {date: '2007-04-26', value: 3},
  {date: '2007-04-27', value: 4},
  {date: '2007-04-28', value: 5},
  {date: '2007-04-29', value: 6}
]

const data = dataIn.map(d => ({
  ...d,
  date: new Date(d.date)
}))

const height = 500
const width = 900

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 60,
}

export default function LineChart () {
  const svgRef = useRef()
  const leftAxisRef = useRef()
  const bottomAxisRef = useRef()
  const xScale = useMemo(
    () => scaleUtc()
      .domain(extent(data, d => d.date))
      .range([margin.left, width - margin.right])
    , [data])
  const yScale = useMemo(
    () => scaleLinear()
      .domain([0, max(data, d => d.value)]).nice()
      .range([height - margin.bottom, margin.top])
    , [data])

  const points = data.map((d) => {
    console.log('d', d)
    return [
      xScale(d.date),
      yScale(d.value),
      d.value
    ]
  })

  const yAxis = g => g
  .attr("transform", `translate(${margin.left},0)`)
  .call(axisLeft(yScale))
  .call(g => select(".domain").remove())
  .call(g => select(".tick:last-of-type text").clone()
      .attr("x", 3)
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text(data.y))

  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(axisBottom(xScale).ticks(width / 80).tickSizeOuter(0))
  useLayoutEffect(
    () => {
      select(bottomAxisRef.current).call(xAxis)
      select(leftAxisRef.current).call(yAxis)
    },
  )
  return (
    <div>
      <svg viewBox={[0, 0, width , height]} ref={svgRef}>
        <SvgLine
          translateX={margin.left}
          translateY={margin.bottom}
          points={points}
        />
        <g ref={bottomAxisRef} color='red'/>
        <g ref={leftAxisRef} color='red'/>
        {/* <LeftValueAxis
          scale={yScale}
          translateX={margin.left}
        /> */}
        {/* <BottomTimeAxis
          scale={xScale}
          translateY={height - margin.bottom}
          marginLeft={margin.left}
          width={width - margin.right}
        /> */}
      </svg>
    </div>
  )
}