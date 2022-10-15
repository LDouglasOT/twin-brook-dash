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
import AuthContextProvider from "./Context/AuthContext"

function App() {
  return (
    <AuthContextProvider>
    <Router> 
    <div>
      <Authenticated/>
    </div>
    </Router>
    </AuthContextProvider>
  )
}

export default App