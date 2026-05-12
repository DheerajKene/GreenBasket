import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './components/Splash/Splash' 
import Navbar from './components/DashNavBar/Navbar'
import Allroutes from './Allroutes'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'

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
