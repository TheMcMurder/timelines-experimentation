import React from 'react'

export default function CovidChartHeader({ dead, dataForCurrentDay, markAsSeen }) {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-xl">{dead.toLocaleString()} Dead Americans from COVID-19</h1>
        <button
          className="text-red-700 mx-2 rounded-full flex items-center justify-center"
          onClick={() => markAsSeen(false)}
        >
          *
        </button>
      </div>
      <div>{dataForCurrentDay && dataForCurrentDay.date.toLocaleString()}</div>
    </div>
  )
}
