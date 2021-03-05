import React from 'react'

export default function NavIcon(props) {
  const { height = 50, width = 50, className = '' } = props
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      className={`fill-current ${className}`}
    >
      <title>timeline-steps-roadmap-graph-process-diagram</title>
      <g>
        <path d="M56.5,30c-2.8,0-5.2,2.2-5.5,5H37.5c0-3-2.5-5.5-5.5-5.5S26.5,32,26.5,35H20v-2h-2v2h-5c-0.3-3-3-5.3-6-5s-5.3,3-5,6   s3,5.3,6,5c2.3-0.2,4.2-1.8,4.8-4h13.9c0.8,2.9,3.8,4.6,6.8,3.8c1.9-0.5,3.3-2,3.8-3.8H44v1h2v-1h5.2c0.8,2.9,3.9,4.6,6.8,3.8   s4.6-3.9,3.8-6.8C61.1,31.6,59,30,56.5,30z M7.5,39C5.6,39,4,37.4,4,35.5S5.6,32,7.5,32s3.5,1.6,3.5,3.5c0,0,0,0,0,0   C11,37.4,9.4,39,7.5,39L7.5,39z M32,38.8c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5v0   C35.5,37.2,33.9,38.8,32,38.8z M56.5,39c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5c0,0,0,0,0,0   C60,37.4,58.4,39,56.5,39z"></path>
        <rect x="18" y="29" width="2" height="2"></rect>
        <rect x="18" y="25" width="2" height="2"></rect>
        <rect x="18" y="21" width="2" height="2"></rect>
        <rect x="44" y="44" width="2" height="2"></rect>
        <rect x="44" y="40" width="2" height="2"></rect>
        <path d="M10,19h18c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1H10c-0.6,0-1,0.4-1,1v8C9,18.6,9.4,19,10,19z M11,11h16v6H11V11z"></path>
        <rect x="13" y="13" width="2" height="2"></rect>
        <rect x="17" y="13" width="8" height="2"></rect>
        <path d="M54,49h-8v-1h-2v1h-8c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-8C55,49.4,54.6,49,54,49z M53,57H37v-6h16   V57z"></path>
        <rect x="39" y="53" width="8" height="2"></rect>
        <rect x="49" y="53" width="2" height="2"></rect>
      </g>
    </svg>
  )
}
