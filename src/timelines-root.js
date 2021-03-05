import React from 'react'
import CSS from './timelines-root.css'
import Navigation from './navigation/navigation.js'
import { Router } from '@reach/router'
import CovidRoot from './covid-chart/covid-chart-wrapper.js'
import Home from './home/home.js'

let ElectoralCollege = () => <div>Other</div>

export default function Root() {
  return (
    <>
      <Navigation />
      <main className="flex-1 overflow-y-auto">
        <Router>
          {window.toggles.homePage ? <Home default path="/" /> : <CovidRoot default path="covid-19" />}
          {window.toggles.homePage && <CovidRoot path="covid-19" />}
          <ElectoralCollege path="electoral-college" />
        </Router>
      </main>
    </>
  )
}
