import React, { lazy, Suspense } from 'react'
const LineChart = lazy(() => import('./line-chart/line-chart.js'))
import { useLiveData$ } from './data-stream/data-stream.js'

export default function CovidChart(props) {
  const data = useLiveData$()
  const [latest] = data.slice(-1)
  return (
    <Suspense fallback={null}>
      <div>Day: {latest && latest.date.toLocaleString()}</div>
      <LineChart {...props} data={data} xDomainFn={xDomainFn} yDomainFn={deathsFn} />
    </Suspense>
  )
}

function xDomainFn(d) {
  return d.date
}

function deathsFn(d) {
  return d.death || 0
}

function infectionsFn(d) {
  return d.positive || 0
}
