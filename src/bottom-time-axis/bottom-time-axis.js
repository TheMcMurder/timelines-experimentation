import React from 'react'

export default function BottomTimeAxis({ scale, translateY, marginLeft, width }) {
  const ticks = scale.ticks()
  return (
    <g
      id='bottom-axis-wrapper'
      transform={`translate(0, ${translateY})`}
      fill="none"
      font-size="10"
      font-family="sans-serif"
      text-anchor="middle"
    >
      <path
        className="domain"
        stroke="currentColor"
        d={`M${marginLeft + 0.5},0H${width}`}
      />
      {
        ticks.map((date) => {
          return (
            <g
              key={date.toUTCString()}
              className='tick'
              opacity="1"
              transform={`translate(${scale(date) + 0.5}, 0)`}
              textAnchor="middle"
              fontSize='10'
            >
              <line
                stroke="currentColor"
                y2="-500"
              />
              <text
                fill="currentColor"
                y="9"
                dy="0.71em"
              >
                {`${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`}
              </text>
            </g>
          )
        })
      }
    </g>
  )
}