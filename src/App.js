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

function App() {
const {token,setToken}=useState(false)
if (token){
  <Router>
  <div>
    <Login/>
  </div>
  </Router>
}

  return (
    <Router>
    <div>
      <Authenticated/>
    </div>
    </Router>
  )
}

export default App