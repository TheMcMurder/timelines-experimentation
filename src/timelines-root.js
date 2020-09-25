import React, { lazy, Suspense } from 'react'
import CSS from './timelines-root.css'
import CovidChart from './covid-chart.js'
import Accreditation from './accreditation/accreditation.js'

const height = 300
const width = 700

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 80,
}

export default function TimelinesRootComponent() {
  return (
    <div>
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
