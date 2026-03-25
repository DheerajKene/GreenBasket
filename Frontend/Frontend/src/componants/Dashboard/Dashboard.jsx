import React from 'react'
import Navbar from '../DashNavBar/Navbar'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Categories/>
    </div>
  )
}

export default Dashboard