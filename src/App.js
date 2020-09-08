import React from 'react'
import _get from 'lodash/get'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a custom CRA template
        </p>
        <p>
          {_get({ from: { obj: 'we have lodash' } }, 'from.obj', 'no lodash')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
