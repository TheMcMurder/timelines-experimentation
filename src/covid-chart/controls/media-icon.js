import React from 'react'

function SvgBase(props) {
  const { className, viewBox = '0 0 100 125', children, ...other } = props
  return (
    <svg version="1.1" x="0px" y="0px" viewBox={viewBox} className={`fill-current w-8 h-8 ${className}`}>
      {children}
    </svg>
  )
}

export function StepForwardSlowIcon({ className }) {
  return (
    <SvgBase className={className}>
      <g xmlns="http://www.w3.org/2000/svg">
        <path d="M94.6,44.6L44.4,11.2c-4.3-2.9-10.1,0.2-10.1,5.4v66.8c0,5.2,5.8,8.3,10.1,5.4l50.2-33.4C98.5,52.8,98.5,47.2,94.6,44.6z     " />
        <path d="M19.9,10.1H5.7c-1.8,0-3.2,1.5-3.2,3.2v73.3c0,1.8,1.5,3.2,3.2,3.2h14.1c1.8,0,3.2-1.5,3.2-3.2V13.3     C23.1,11.5,21.6,10.1,19.9,10.1z" />
      </g>
    </SvgBase>
  )
}

export function PauseIcon({ className }) {
  return (
    <SvgBase className={className}>
      <g xmlns="http://www.w3.org/2000/svg">
        <path d="M35.6,2.5H13.3c-2.1,0-3.9,1.7-3.9,3.9v87.3c0,2.1,1.7,3.9,3.9,3.9h22.2c2.1,0,3.9-1.7,3.9-3.9V6.4     C39.4,4.2,37.7,2.5,35.6,2.5z" />
        <path d="M86.7,2.5H64.4c-2.1,0-3.9,1.7-3.9,3.9v87.3c0,2.1,1.7,3.9,3.9,3.9h22.2c2.1,0,3.9-1.7,3.9-3.9V6.4     C90.5,4.2,88.8,2.5,86.7,2.5z" />
      </g>
    </SvgBase>
  )
}

export function PlayIcon({ className }) {
  return (
    <SvgBase className={className}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M84.2,43.6L24.4,3.8c-5.1-3.4-12,0.3-12,6.4v79.5c0,6.2,6.9,9.8,12,6.4l59.8-39.8C88.7,53.4,88.7,46.6,84.2,43.6z"
      />
    </SvgBase>
  )
}

export function FastForwardIcon({ className }) {
  return (
    <SvgBase className={className}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M94.9,45.2l-45-30c-3.9-2.6-9,0.2-9,4.8v14.6L11.5,15.2c-3.9-2.6-9,0.2-9,4.8V80c0,4.6,5.2,7.4,9,4.8l29.3-19.5V80    c0,4.6,5.2,7.4,9,4.8l45-30C98.4,52.5,98.4,47.5,94.9,45.2z"
      />
    </SvgBase>
  )
}
