import React from 'react'
import { start, pause } from './time-stream.js'

export default function TimeControls() {
  return (
    <div className="bg-gray-400 absolute p-4 flex w-48 justify-between">
      <Button onClick={start}>Play</Button>
      <Button onClick={pause}>Pause</Button>
    </div>
  )
}

function Button(props) {
  const { children, ...rest } = props
  return (
    <button
      className="rounded-lg px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold leading-tight shadow-md"
      {...rest}
    >
      {children}
    </button>
  )
}
