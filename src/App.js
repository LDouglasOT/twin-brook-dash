import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Authenticated from './Authenticated'
import {Login} from './components'
import {useState} from 'react'
import StateContextProvider from "./Context/StateContextProvider"

function App() {
  return (
    <Router>
      <StateContextProvider>
    <div>
      <Authenticated/>
    </div>
    </StateContextProvider>
    </Router>
  )
}

export default App