import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaFacebookSquare, FaTwitterSquare, FaBehance, FaPinterestSquare, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='footer'>
        <div id='copyright'>
          2022 Copyrights. All rights reserved.
        </div>
        <div id='social-media'>
          <FaFacebookSquare/>
          <FaTwitterSquare/>
          <FaBehance/>
          <FaPinterestSquare/>
          <FaLinkedin/>
        </div>
    </footer>
  )
}

export default Footer