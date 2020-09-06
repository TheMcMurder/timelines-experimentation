import React, { lazy, Suspense } from 'react'
import CSS from './timelines-root.css'
const LineChart = lazy(() => import('./line-chart/line-chart.js'))
import { useData$, data as randomData } from './data-stream/data-stream.js'

const height = 500
const width = 900

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 60,
}

export default function TimelinesRootComponent() {
  const data = useData$()
  return (
    <div>
      <div>Root Component</div>
      <Suspense fallback={null}>
        <LineChart
          height={height}
          width={width}
          margin={margin}
          data={data}
          // data={randomData}
        />
      </Suspense>
    </div>
  )
}
