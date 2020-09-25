import React from 'react'

export default function SvgLine({ points, stroke = 'black', strokeWidth = 1.5, clipPath }) {
  const line = points.reduce((acc, point, index) => {
    const [x, y] = point
    if (index === 0) {
      return `M${x},${y}`
    } else {
      return acc + `L${x},${y}`
    }
  }, '')
  return (
    <path
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
      d={line}
      clipPath={clipPath}
    />
  )
}
