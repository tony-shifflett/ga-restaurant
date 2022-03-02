import React from 'react'
import ImageGallery from '../components/ImageGallery'
import GalleryLead from '../components/GalleryLead'
import GalleryText from '../components/GalleryText'
import '../styles/Gallery.css'

const Gallery = () => {
  return (
    <div id="gallery">
        <GalleryLead/>
        <section id="gallery-body">
          <GalleryText/>
          <ImageGallery/>
        </section>
    </div>
  )
}

export default Gallery