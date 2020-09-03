import React from 'react'
import ReactDOM from 'react-dom'

function Body() {
  return <div>React</div>
}

const domContainer = document.querySelector('#timelines-app');
ReactDOM.render(<Body/>, domContainer);