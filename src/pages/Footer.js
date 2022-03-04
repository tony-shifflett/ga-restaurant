import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSqu } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer id='footer'>
        <div id='copyright'>
          2022 Copyrights. All rights reserved.
        </div>
        <div id='social-media'>
          {/* placeholder text */}
          Social Media Icons
        </div>
    </footer>
  )
}

export default Footer