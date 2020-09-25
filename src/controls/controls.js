import React from 'react'
import { start, pause } from './time-stream.js'

export default function TimeControls() {
  return (
    <div className="bg-gray-400 absolute p-4 flex w-48 justify-between">
      <Button onClick={start}>Play</Button>
      <Button onClick={pause} secondary={true}>
        Pause
      </Button>
    </div>
  )
}

function Button(props) {
  const { children, secondary = false, ...rest } = props
  return (
    <button
      className={`${
        secondary ? 'bg-gray-700 hover:bg-gray-900' : 'bg-red-700 hover:bg-red-800'
      } rounded-lg px-4 py-3 text-white font-semibold leading-tight shadow-md`}
      {...rest}
    >
      {children}
    </button>
  )
}
