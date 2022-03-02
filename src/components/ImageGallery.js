import React from 'react'
import tacos from '../assets/images/unsplash_lP5MCM6nZ5A.jpg'
import panini from '../assets/images/unsplash_SqYmTDQYMjo.jpg'
import sandwich from '../assets/images/unsplash_mAQZ3X_8_l0.jpg'
import donuts from '../assets/images/unsplash_q54Oxq44MZs.jpg'
import pizza from '../assets/images/unsplash_CbNAuxSZTFo.jpg'

const ImageGallery = () => {
  return (
    <div id="image-gallery">
        <section id ="large-images">
            <img src={tacos}/>
            <img src={panini}/>
        </section>
        <section id="small-images">
            <img src={sandwich}/>
            <img src={donuts}/>
            <img src={pizza}/>
        </section>
    </div>
  )
}

export default ImageGallery