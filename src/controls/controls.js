import React, { useState } from 'react'
import { start, pause, changeSpeed } from './time-stream.js'

const selectionMap = {
  Slow: 2000,
  Normal: 700,
  Fast: 100,
}

export default function TimeControls() {
  return (
    <div className="bg-red-100 md:bg-gray-400 md:absolute p-4 md:w-48">
      <div>Playback</div>
      <div className="w-100 flex justify-between">
        <Button onClick={start}>Play</Button>
        <Button onClick={pause} secondary={true}>
          Pause
        </Button>
      </div>
      <div className="pt-4">
        <div>Playback speed</div>
        <RadioButtons
          initialSelected={'Normal'}
          options={['Slow', 'Normal', 'Fast']}
          onChange={(option) => {
            const selection = selectionMap[option] || selectionMap['Normal']
            changeSpeed(selection)
          }}
        />
      </div>
    </div>
  )
}

function RadioButtons({ options = [], onChange, initialSelected }) {
  const [selected, setSelected] = useState(initialSelected)
  return (
    <div className="flex justify-between">
      {options.map((option) => {
        return (
          <button
            key={option}
            className={`rounded-lg px-2 py-1 text-white leading-tight shadow-md ${
              selected === option ? 'bg-blue-400' : 'bg-gray-700 hover_bg-gray-900'
            }`}
            onClick={() => {
              setSelected(option)
              onChange(option)
            }}
          >
            {option}
          </button>
        )
      })}
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
