import React from 'react'
import './splash.css'
import logo from './logobg.png'

const Splash = () => {
  return (
    <div className="splash-container">
      {/* Background blur colors */}
      <div className="bg bg-red"></div>
      <div className="bg bg-blue"></div>
      <div className="bg bg-green"></div>

      {/* Logo Section */}
      <div className="logo-wrapper">
        <div className='logo'>
        </div>
       
        {/* <img src={logo} alt="GreenBasket Log" className="logo" /> */}

        {/* Loading Animation */}
        {/* <div className="loader"></div> */}

        <p className="loading-text">Preparing Fresh Experience...</p>
      </div>
    </div>
  );
}

export default Splash