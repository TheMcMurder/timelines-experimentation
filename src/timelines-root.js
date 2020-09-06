import React, { lazy, Suspense } from 'react'
import CSS from './timelines-root.css'
const LineChart = lazy(() => import('./line-chart/line-chart.js'))

const height = 500
const width = 900

const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60,
}

const dataIn = [
    { date: '2007-04-24', value: 1 },
    { date: '2007-04-25', value: 2 },
    { date: '2007-04-26', value: 3 },
    { date: '2007-04-27', value: 4 },
    { date: '2007-04-28', value: 5 },
    { date: '2007-04-29', value: 6 },
]

const data = dataIn.map((d) => ({
    ...d,
    date: new Date(d.date),
}))

export default function TimelinesRootComponent() {
    return (
        <div>
            <div>Root Component</div>
            <Suspense fallback={null}>
                <LineChart height={height} width={width} margin={margin} data={data} />
            </Suspense>
        </div>
    )
}
