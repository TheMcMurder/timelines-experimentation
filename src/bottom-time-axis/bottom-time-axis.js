import React from 'react'

export default function BottomTimeAxis({ scale, translateY, marginLeft, width }) {
  const ticks = scale.ticks()
  return (
    <g
      id='bottom-axis-wrapper'
      transform={`translate(0, ${translateY})`}
      fill="none"
      fontSize="10"
      fontFamily="sans-serif"
      textAnchor="middle"
    >
      <path
        className="domain"
        stroke="currentColor"
        d={`M${marginLeft + 0.5},0.5H${width}`}
      />
      {
        ticks.map((date) => {
          return (
            <g
              key={date.toUTCString()}
              className='tick'
              opacity="1"
              transform={`translate(${scale(date) + 0.5}, 0)`}
            >
              <line
                stroke="currentColor"
                y2="6"
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