import React, { useState, useEffect } from 'react'
import { triggerSpecificDay } from '../controls/time-stream.js'
import { getTrumpEvents$, getNeutralEvents$ } from './notable-events-stream.js'

const RepublicanRed = '#DE0100'
const DemocraticBlue = '#1404BD'
const NeutralGray = '#e4e5e5'

export default function EventsChart({ currentDay, height, width, marginLeft, marginRight, xScale }) {
  return (
    <svg viewBox={[0, 0, width, height]}>
      <g>
        <path stroke="#8A0707" strokeWidth={3} d={`M${0.5 + xScale(currentDay)},0.5v${height}`} />
        <g transform={`translate(0, 5)`}>
          <NeutralEvents
            currentDay={currentDay}
            marginRight={marginRight}
            marginLeft={marginLeft}
            width={width - marginRight}
            xScale={xScale}
          />
        </g>
        <g transform={`translate(0, 25)`}>
          <TrumpEvents
            currentDay={currentDay}
            marginRight={marginRight}
            marginLeft={marginLeft}
            width={width - marginRight}
            xScale={xScale}
          />
        </g>
      </g>
    </svg>
  )
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

export function NeutralEvents({ marginRight, marginLeft, width, xScale, currentDay }) {
  const [neutralEvents, setNeutralEvents] = useState([])
  useEffect(() => {
    const sub = getNeutralEvents$(xScale, currentDay).subscribe(setNeutralEvents)
    return () => sub.unsubscribe()
  }, [xScale, currentDay])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {neutralEvents.map((evt) => {
        return <Event event={evt} fill={NeutralGray} x={evt.x} />
      })}
    </g>
  )
}

function Event({ fill, x, event }) {
  const { date } = event
  return (
    <circle
      fill={fill}
      r="5"
      cy="0.5"
      cx={x}
      onClick={() => {
        triggerSpecificDay(date)
      }}
    />
  )
}