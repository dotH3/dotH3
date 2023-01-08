import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
