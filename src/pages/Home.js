import React from 'react'
import About from '../components/About'
import Foooter from '../components/Foooter'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Foooter/>
    </div>
  )
}

export default Home