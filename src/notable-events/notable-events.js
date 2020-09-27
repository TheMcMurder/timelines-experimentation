import React, { useEffect, useState } from 'react'
import { BidenEvent, TrumpEvent } from './event-summary.js'
import { getTrumpEvents$, useHighlightBidenEvents, useHighlightTrumpEvents } from './notable-events-stream.js'

const RepublicanRed = '#DE0100'
const DemocraticBlue = '#1404BD'

export default function NotableEvents({ marginRight, height, marginLeft, width, xScale, currentDay }) {
  const highlightedBidenEvent = useHighlightBidenEvents()
  const highlightedTrumpEvent = useHighlightTrumpEvents()
  if (currentDay) {
    return (
      <div>
        <svg viewBox={[0, 0, width - marginRight, height]}>
          <g>
            <path stroke="#8A0707" d={`M${0.5 + xScale(currentDay)},0.5v${height}`}></path>
            <g transform={`translate(0, 25)`}>
              <TrumpEvents
                currentDay={currentDay}
                marginRight={marginRight}
                marginLeft={marginLeft}
                width={width}
                xScale={xScale}
              />
            </g>
          </g>
        </svg>
        <div className="bg-gray-100 w-full">
          <div className="m-2 flex">
            <div className="flex-1 flex justify-center items-center">
              {highlightedBidenEvent && <BidenEvent event={highlightedBidenEvent} />}
            </div>
            <div className="flex-1 flex justify-center items-center">
              {highlightedTrumpEvent && <TrumpEvent event={highlightedTrumpEvent} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export function TrumpEvents({ marginRight, marginLeft, width, xScale, currentDay }) {
  const [trumpEvents, setTrumpEvents] = useState([])
  useEffect(() => {
    const sub = getTrumpEvents$(xScale, currentDay).subscribe(setTrumpEvents)
    return () => sub.unsubscribe()
  }, [xScale, currentDay])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {trumpEvents.map((evt) => {
        return <Event event={evt} fill={RepublicanRed} x={evt.x} />
      })}
    </g>
  )
}

function Event({ fill, x }) {
  return <circle fill={fill} r="5" cy="0.5" cx={x} />
}
