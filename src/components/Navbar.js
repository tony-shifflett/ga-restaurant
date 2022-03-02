import React from 'react'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
      <div className='navbar'>
        <ul className='nav-list'>
            <div id='nav-logo'>
                <li>Restaurant</li>
            </div>
            <div className='nav-menu-items'>
            <li><a className="name-menu-item" href="#about-page">About</a></li>
            <li><a className="name-menu-item" href="#gallery">Gallery</a></li>
            <li><a className="name-menu-item" href="#reviews">Testimonial</a></li>
            <li><FontAwesomeIcon icon={faPhoneFlip} />1800-123-4567</li>
            <li><button type="button">RESERVATION</button></li>
            </div>
        </ul>
      </div>
  )
}

export default Navbar