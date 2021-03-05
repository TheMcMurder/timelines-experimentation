import React, { lazy, Suspense } from 'react'
import CovidChart from './covid-chart.js'
import Accreditation from './accreditation/accreditation.js'
import Disclaimer from './disclaimer/disclaimer.js'
import { useSeenDisclaimer } from './persistent/persistent.js'

const height = 300
const width = 700

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
}

export default function TimelinesRootComponent() {
  const [seen, markAsSeen] = useSeenDisclaimer()
  return (
    <div>
      <Disclaimer seen={seen} markAsSeen={markAsSeen} />
      <CovidChart height={height} width={width} margin={margin} markAsSeen={markAsSeen} />
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
