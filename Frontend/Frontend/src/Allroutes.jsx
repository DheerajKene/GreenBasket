import React, { useState, useEffect } from 'react'
import{Routes, Route, useLocation} from 'react-router-dom'
import Splash from './componants/Splash/Splash'
import Dashboard from './componants/Dashboard/Dashboard'
import Contact from './componants/Contact/Contact'
import Help from './componants/Help/Help'
import Register from './componants/Register/Register'
import Login from './componants/Login/Login'
import Navbar from './componants/DashNavBar/Navbar'

const Allroutes = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (visited) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        localStorage.setItem('visited', 'true');
        setShowSplash(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
        {!(location.pathname === '/' && showSplash) && <Navbar />}
        <Routes>
            <Route path='/' element={showSplash ? <Splash /> : <Dashboard />}/>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default Allroutes