import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './componants/Splash/Splash' 
import Navbar from './componants/DashNavBar/Navbar'
import Allroutes from './Allroutes'

function App() {

  return (
    <>
    <Allroutes/>
    </>
  )

}

export default App
