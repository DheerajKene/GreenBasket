import React, { useState, useEffect } from 'react'
import{Routes, Route, useLocation} from 'react-router-dom'
// import Splash from './componants/Splash/Splash'
import Dashboard from './components/Dashboard/Dashboard'
import Contact from './components/Contact/Contact'
import Help from './components/Help/Help'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import MyAccount from './pages/MyAccount'
import ExploreProducts from './pages/ExploreProducts'
import Navbar from './components/DashNavBar/Navbar'

const Allroutes = () => {


  return (
    <>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/About' element={<About/>}> </Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/account' element={<MyAccount/>}></Route>
            <Route path='/explore' element={<ExploreProducts/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default Allroutes