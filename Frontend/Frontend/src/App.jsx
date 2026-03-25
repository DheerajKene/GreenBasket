import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './componants/Splash/Splash' 
import Navbar from './componants/DashNavBar/Navbar'
import Allroutes from './Allroutes'
import Hero from './componants/Hero/Hero'
import Categories from './componants/Categories/Categories'
import Footer from './componants/Footer/Footer'

function App() {

  return (
    <>
    <Allroutes/>


      <Navbar />
    <Footer />
    </>
  )

}

export default App
