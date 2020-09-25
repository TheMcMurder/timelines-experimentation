import React from 'react'
import { format } from 'd3'
const numberFormat = format('~s')

export default function LeftValueAxis({ scale, translateX }) {
  const ticks = scale.ticks()
  return (
    <g id="left-axis-wrapper" textAnchor="end" transform={`translate(${translateX}, ${0})`}>
      {ticks.map((tick) => {
        return (
          <g key={tick} transform={`translate(0, ${scale(tick) + 0.5})`}>
            <line stroke="currentColor" x2="-6" />
            <text fill="currentColor" x="-9" dy="0.32em">
              {numberFormat(tick)}
            </text>
          </g>
        )
      })}
    </g>
  )
}
