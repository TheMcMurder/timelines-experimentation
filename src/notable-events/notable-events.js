import React, { useEffect, useState } from 'react'
import { getEvents1$ } from './notable-events-stream.js'

export default function NotableEvents({ marginRight, height, marginLeft, width, xScale, currentDay }) {
  return (
    <g>
      <path stroke="#8A0707" d={`M${0.5 + xScale(currentDay)},0.5v${height}`}></path>
      <g transform={`translate(0, 25)`}>
        <NotableEventLine marginRight={marginRight} marginLeft={marginLeft} width={width} xScale={xScale} />
      </g>
    </g>
  )
}

export function NotableEventLine({ marginRight, marginLeft, width, xScale }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const sub = getEvents1$(xScale).subscribe(setEvents)
    return () => sub.unsubscribe()
  }, [xScale])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {events.map((evt) => {
        return <circle fill="green" r="3" cy="0.5" cx={evt.x} />
      })}
    </g>
  )
}
