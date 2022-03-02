import React from 'react'
import Navbar from '../components/Navbar'
import AboutTopText from '../components/AboutTopText'
import '../styles/About.css'
import AboutText from '../components/AboutText'


const About = () => {
  return (
    <div id="about-page">
        <AboutTopText/>
        <AboutText/>
        {/* <Navbar/> */}
    </div>
  )
}

export default About