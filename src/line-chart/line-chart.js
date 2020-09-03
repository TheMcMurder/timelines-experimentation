import React, {useRef} from 'react'
import {
  scaleUtc,
  scaleTime,
  extent
} from 'd3';

const dataIn = [
  {date: '2007-04-24', value: 93.24},
  {date: '2007-04-25', value: 93.24},
  {date: '2007-04-26', value: 93.24},
  {date: '2007-04-27', value: 93.24},
  {date: '2007-04-28', value: 93.24},
  {date: '2007-04-29', value: 93.24}
]

const data = dataIn.map(d => ({
  ...d,
  date: new Date(d.date)
}))

const height = 500
const width = 900

const margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40,
}

export default function LineChart () {
  const svgRef = useRef()
  const xScale = scaleUtc()
    .domain(extent(data, d => d.date))
    .range([margin.left, width - margin.right])
  return (
    <div>
      <svg ref={svgRef} viewBox={[0, 0, width , height]}>
        <BottomAxis scale={xScale} translateY={height - margin.bottom} />
      </svg>
    </div>
  )
}

function BottomAxis ({scale, translateY}) {
  const ticks = scale.ticks()
  console.log('ticks', ticks)
  return (
    <g id='bottom-axis-wrapper'>
      <foreignObject width="100%" y={translateY} height={20}>
        <div className="flex justify-between">
          {
            ticks.map(tick => (
              <span key={tick} className='text-xs'>
                {tick.toLocaleDateString('en-US')}
              </span>
            ))
          }

        </div>
      </foreignObject>
    </g>
  )
}