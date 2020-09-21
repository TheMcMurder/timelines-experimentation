import React from 'react'
import { start, pause } from './time-stream.js'

export default function TimeControls() {
  return (
    <div>
      Time Controls
      <button onClick={start}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  )
}
