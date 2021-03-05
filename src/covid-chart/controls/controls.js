import React, { useEffect, useState } from 'react'
import { start, pause, changeSpeed, timeState$ } from './time-stream.js'
import { FastForwardIcon, StepForwardSlowIcon, PlayIcon, PauseIcon } from './media-icon.js'

const selectionMap = {
  Slow: 2000,
  Normal: 700,
  Fast: 100,
}

const classMap = {
  active: 'text-green-500',
  partiallyActive: 'text-green-200',
  inactive: '',
}

function playThenSpeed(speed = 'Normal') {
  const selection = selectionMap[speed]
  changeSpeed(selection)
  start()
}

export default function TimeControls() {
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState('Normal')
  useEffect(() => {
    const sub = timeState$.subscribe((state) => {
      setPlaying(state.playing)
      if (state.speed === selectionMap.Fast) {
        setSpeed('Fast')
      } else if (state.speed === selectionMap.Slow) {
        setSpeed('Slow')
      } else {
        setSpeed('Normal')
      }
    })
    return () => sub.unsubscribe()
  }, [])
  console.log('speed', speed)
  console.log('playing', playing)
  return (
    <div className="bg-red-100 md:bg-gray-400 md:absolute p-4 md:w-48 top-0" style={{ left: '12rem' }}>
      <div className="w-100 flex justify-between">
        <button onClick={pause}>
          <PauseIcon className={playing === false ? classMap.active : classMap.inactive} />
        </button>
        <button onClick={() => playThenSpeed('Slow')}>
          <StepForwardSlowIcon className={speed === 'Slow' ? classMap.active : classMap.inactive} />
        </button>
        <button onClick={() => playThenSpeed()}>
          <PlayIcon
            className={
              playing === true ? (speed === 'Normal' ? classMap.active : classMap.partiallyActive) : classMap.inactive
            }
          />
        </button>
        <button onClick={() => playThenSpeed('Fast')}>
          <FastForwardIcon className={speed === 'Fast' ? classMap.active : classMap.inactive} />
        </button>
      </div>
    </div>
  )
}
