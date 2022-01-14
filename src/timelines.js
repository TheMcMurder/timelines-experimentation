import React from 'react'
import ReactDOM from 'react-dom'
import Root from './timelines-root.js'

window.toggles = {
  electoralCollege: getToggleStateFromLS('electoralCollege') || false,
  homePage: getToggleStateFromLS('homePage') || false,
}

window.customDevTools = {
  setToggle: (toggleKey, value) => localStorage.setItem(`timelines:${toggleKey}`, value),
}

const domContainer = document.querySelector('#timelines-app')
ReactDOM.render(<Root />, domContainer)

function getToggleStateFromLS(toggleKey) {
  const value = localStorage.getItem(`timelines:${toggleKey}`)
  return value === 'on' || value === 'true'
}
