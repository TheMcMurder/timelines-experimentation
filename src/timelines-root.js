import React, { Suspense, lazy } from 'react'
import CSS from './timelines-root.css'
import Navigation from './navigation/navigation.js'
import { Router } from '@reach/router'
import CovidRoot from './covid-chart/covid-chart-wrapper.js'
import Home from './home/home.js'

const ElectoralCollege = lazy(() => import('./electoral-college/electoral-college.js'))
const ElectoralCollegeSuspended = (props) => (
  <Suspense fallback={null}>
    <ElectoralCollege {...props} />
  </Suspense>
)

export default function Root() {
  return (
    <>
      <Navigation />
      <main className="flex-1 overflow-y-auto container m-auto">
        <Router>
          {window.toggles.homePage ? <Home default path="/" /> : <CovidRoot default path="covid-19" />}
          {window.toggles.homePage && <CovidRoot path="covid-19" />}
          <ElectoralCollegeSuspended path="electoral-college" />
        </Router>
      </main>
    </>
  )
}
