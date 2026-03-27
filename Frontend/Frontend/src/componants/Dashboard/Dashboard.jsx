import React from 'react'
import Navbar from '../DashNavBar/Navbar'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'
import ExploreProducts from '../../pages/ExploreProducts'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Categories/>
      <ExploreProducts/>
    </div>
  )
}

export default Dashboard