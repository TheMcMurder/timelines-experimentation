import React from 'react'
import { Router } from '@reach/router'
import CovidRoot from './timelines-root.js'

let Other = () => <div>Other</div>

export default function (props) {
  return (
    <Router>
      <CovidRoot default path="covid-19" />
      <Other path="other" />
    </Router>
  )
}
