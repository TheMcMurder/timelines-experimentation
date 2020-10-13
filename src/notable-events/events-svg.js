import React, { useState, useEffect, useCallback } from 'react'
import { triggerSpecificDay } from '../controls/time-stream.js'
import { bidenEvents } from './data/biden-events.js'
import { getTrumpEvents$, getNeutralEvents$, getBidenEvents$ } from './notable-events-stream.js'

const RepublicanRed = '#DE0100'
const DemocraticBlue = '#1404BD'
const NeutralGray = '#e4e5e5'

export default function EventsChart({ currentDay, height, width, marginLeft, marginRight, xScale }) {
  const [clicked, setClicked] = useState(false)
  const hideText = useCallback(() => {
    if (clicked === false) {
      setClicked(true)
    }
  }, [clicked])
  return (
    <svg viewBox={[0, 0, width, height]}>
      <g>
        {!clicked && (
          <g transform={`translate(${30}, ${height - 5}) rotate(-90)`} className={`fill-current text-gray-500`}>
            <text>Events are</text>
            <text transform={`translate(0, 15)`}>clickable</text>
          </g>
        )}
        <path stroke="#8A0707" strokeWidth={3} d={`M${0.5 + xScale(currentDay)},0.5v${height}`} />
        <g transform={`translate(0, 8)`}>
          <TrumpEvents
            hideText={hideText}
            currentDay={currentDay}
            marginRight={marginRight}
            marginLeft={marginLeft}
            width={width - marginRight}
            xScale={xScale}
          />
        </g>
        <g transform={`translate(0, 28)`}>
          <NeutralEvents
            hideText={hideText}
            currentDay={currentDay}
            marginRight={marginRight}
            marginLeft={marginLeft}
            width={width - marginRight}
            xScale={xScale}
          />
        </g>
        <g transform={`translate(0, 48)`}>
          <BidenEvents
            hideText={hideText}
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

export function TrumpEvents({ marginRight, marginLeft, width, xScale, currentDay, hideText }) {
  const [trumpEvents, setTrumpEvents] = useState([])
  useEffect(() => {
    const sub = getTrumpEvents$(xScale, currentDay).subscribe(setTrumpEvents)
    return () => sub.unsubscribe()
  }, [xScale, currentDay])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {trumpEvents.map((evt, index) => {
        return <Event key={index} event={evt} fill={RepublicanRed} x={evt.x} hideText={hideText} />
      })}
    </g>
  )
}

export function NeutralEvents({ marginRight, marginLeft, width, xScale, currentDay, hideText }) {
  const [neutralEvents, setNeutralEvents] = useState([])
  useEffect(() => {
    const sub = getNeutralEvents$(xScale, currentDay).subscribe(setNeutralEvents)
    return () => sub.unsubscribe()
  }, [xScale, currentDay])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {neutralEvents.map((evt) => {
        return <Event key={evt.date.getTime()} event={evt} fill={NeutralGray} x={evt.x} hideText={hideText} />
      })}
    </g>
  )
}

export function BidenEvents({ marginRight, marginLeft, width, xScale, currentDay, hideText }) {
  const [bidenEvents, setBidenEvents] = useState([])
  useEffect(() => {
    const sub = getBidenEvents$(xScale, currentDay).subscribe(setBidenEvents)
    return () => sub.unsubscribe()
  }, [xScale, currentDay])
  return (
    <g>
      <path className="domain" stroke="currentColor" d={`M${marginLeft + 0.5},0.5H${width}`} />
      {bidenEvents.map((evt) => {
        return <Event key={evt.date} event={evt} fill={DemocraticBlue} x={evt.x} hideText={hideText} />
      })}
    </g>
  )
}

function Event({ fill, x, event, clicked, setClicked, hideText }) {
  const { date } = event
  return (
    <circle
      className="cursor-pointer"
      fill={fill}
      stroke={'white'}
      strokeWidth={'1px'}
      r="7"
      cy="0.5"
      cx={x}
      onClick={() => {
        hideText()
        triggerSpecificDay(date)
      }}
    />
  )
}
