import React, {lazy, Suspense} from 'react'
import CSS from './timelines-root.css'
const LineChart = lazy(() => import('./line-chart/line-chart.js'))

export default function TimelinesRootComponent () {
  return <div>
    <div>
      Root Component
    </div>
    <Suspense fallback={null}>
      <LineChart />
    </Suspense>
  </div>
}