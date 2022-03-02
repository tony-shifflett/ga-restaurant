import React from 'react'
import '../styles/GalleryLead.css'
import leadImg from '../assets/images/unsplash_P1aohbiT-EY.jpg'

const GalleryLead = () => {
  return (
    <section id="lead-gallery-image">
        <img src={leadImg} alt="pancakes"/>
    </section>
  )
}

export default GalleryLead