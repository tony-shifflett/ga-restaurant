import React from 'react'
import LandingHero from '../components/LandingHero'
import Navbar from '../components/Navbar'
import '../styles/Landing.css'

const Landing = () => {
  return (
    <div className='landing-page'>
        <Navbar/>
        <LandingHero/>
    </div>
  )
}

export default Landing