import React, { useMemo } from 'react'
import SvgLine from './svg-line.js'

export default function Eventlines({ dead, releventEvents, xScale, yScale }) {
  return releventEvents.map((event) => {
    if (event.hidePoint && dead > event.hidePoint) {
      return null
    } else {
      return <EventLine xScale={xScale} yScale={yScale} event={event} key={event.name} />
    }
  })
}

function EventLine({ event, xScale, yScale }) {
  const [minDate, maxDate] = xScale.domain()
  const data = [
    [minDate, event.dead],
    [maxDate, event.dead],
  ]
  const points = useLineChartPoints(xScale, yScale, data)
  return (
    <>
      <SvgLine points={points} stroke={event.color} strokeWidth="0.5" />
      <text
        transform={`translate(${points[0][0]}, ${points[0][1] - 0.5})`}
        fill={event.color}
        style={{ fontSize: '0.5rem' }}
      >
        {event.name}
      </text>
    </>
  )
}

function useLineChartPoints(xScale, yScale, data) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(d[0]), yScale(d[1])]
    })
  }, [data, xScale, yScale])
}
