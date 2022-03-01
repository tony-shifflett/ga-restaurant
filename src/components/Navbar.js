import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
      <div className='navbar'>
        <ul className='nav-list'>
            <div className='nav-logo'>
                <li>Restaurant</li>
            </div>
            <div className='nav-menu-items'>
            <li>About</li>
            <li>Gallery</li>
            <li>Testimonial</li>
            <li>1800-123-4567</li>
            <li>RESERVATION</li>
            </div>
        </ul>
      </div>
  )
}

export default Navbar