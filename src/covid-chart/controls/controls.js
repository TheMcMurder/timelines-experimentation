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
  return (
    <div className="bg-gray-400 md:absolute p-4 w-full md:w-48 top-0" style={{ left: '12rem' }}>
      <div className="w-100 flex justify-between">
        <button onClick={pause}>
          <PauseIcon className={getClassName(playing, speed, 'Pause')} />
        </button>
        <button onClick={() => playThenSpeed('Slow')}>
          <StepForwardSlowIcon className={getClassName(playing, speed, 'Slow')} />
        </button>
        <button onClick={() => playThenSpeed()}>
          <PlayIcon className={getClassName(playing, speed, 'Play')} />
        </button>
        <button onClick={() => playThenSpeed('Fast')}>
          <FastForwardIcon className={getClassName(playing, speed, 'Fast')} />
        </button>
      </div>
    </div>
  )
}

function getClassName(playing, speed, icon) {
  if (icon === 'Fast') {
    return speed === 'Fast' && playing ? classMap.active : classMap.inactive
  } else if (icon === 'Slow') {
    return speed === 'Slow' && playing ? classMap.active : classMap.inactive
  } else if (icon === 'Pause') {
    return !playing ? classMap.active : classMap.inactive
  } else if (icon === 'Play') {
    if (playing && speed === 'Normal') {
      return classMap.active
    }
    return playing ? classMap.partiallyActive : classMap.inactive
  }
}
