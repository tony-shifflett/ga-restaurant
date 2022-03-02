import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='navbar'>
        <ul className='nav-list'>
            <div id='nav-logo'>
                <li>Restaurant</li>
            </div>
            <div className='nav-menu-items'>
            <li><Link className="name-menu-item" to="/about">About</Link></li>
            <li><Link className="name-menu-item" to="/gallery">Gallery</Link></li>
            <li><Link className="name-menu-item" to="/testimonial">Testimonial</Link></li>
            <li>1800-123-4567</li>
            <li><button type="button">RESERVATION</button></li>
            </div>
        </ul>
      </div>
  )
}

export default Navbar