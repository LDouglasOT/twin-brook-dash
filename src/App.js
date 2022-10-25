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
import FetchContextProvider from "./Context/FetchCOntroller"
import PopupContextProvider from './Context/Popupcontroller'

function App() {
  return (
    <PopupContextProvider>
    <FetchContextProvider>
    <AuthContextProvider>
    <Router> 
    <div>
      <Authenticated/>
    </div>
    </Router>
    </AuthContextProvider>
    </FetchContextProvider>
    </PopupContextProvider>
  )
}

export default App