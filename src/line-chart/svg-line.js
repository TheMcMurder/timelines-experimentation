import React from 'react'

export default function SvgLine ({translateX, translateY, points}) {
  const line = points.reduce((acc, point, index) => {
    console.log('point', point[2], point)
    const [x, y] = point
    if (index === 0){
      return `M${x},${y}`
    } else {
      return acc + `L${x},${y}`
    }
  }, '')
  console.log('line', line)
  return (
    <path
      fill="none"
      stroke="steelblue"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      d={line}
    />
  )
  
}