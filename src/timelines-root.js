import React from 'react'
import CSS from './timelines-root.css'
import { Router } from '@reach/router'
import CovidRoot from './covid-chart/covid-chart-wrapper.js'

let Other = () => <div>Other</div>

export default function (props) {
  return (
    <Router>
      <CovidRoot default path="covid-19" />
      <Other path="other" />
    </Router>
  )
}
