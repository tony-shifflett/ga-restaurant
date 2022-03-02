import React from 'react'
import Navbar from '../components/Navbar'
import AboutTopText from '../components/AboutTopText'
import '../styles/About.css'
import AboutText from '../components/AboutText'
import FeaturesText from '../components/FeaturesText'


const About = () => {
  return (
    <div id="about-page">
        <AboutTopText/>
        <AboutText/>
        <FeaturesText/>
        {/* <Navbar/> */}
    </div>
  )
}

export default About