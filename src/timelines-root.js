import React, { lazy, Suspense } from 'react'
import CSS from './timelines-root.css'
import CovidChart from './covid-chart.js'
import Accreditation from './accreditation/accreditation.js'

const height = 500
const width = 900

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 80,
}

export default function TimelinesRootComponent() {
  return (
    <div>
      <h1>US Covid-19 Data</h1>
      <h2>Deaths in the United States</h2>
      <CovidChart height={height} width={width} margin={margin} />
      <Accreditation />
    </div>
  )
}

/*
<LineChart data>
  <LC.Line/>
  <LC.xAxis/>
  <LC.yAxis/>
<Chart>

*/
