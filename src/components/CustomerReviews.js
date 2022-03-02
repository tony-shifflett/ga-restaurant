import React from 'react';
import '../styles/CustomerReviews.css'
import awarded from '../assets/images/Star 4.png';
import unawarded from '../assets/images/Star 5.png';
import firstCustomer from '../assets/images/unsplash_mEZ3PoFGs_k.jpg'
import secondCustomer from '../assets/images/unsplash_sibVwORYqs0.jpg'

const CustomerReviews = () => {
  return (
    <div id="customer-review-body">
        <div className='review-card'>
            <img className="customer-photo" src={firstCustomer} alt="a happy customer"/>
            <div className='card-body'>
                <div className="review-text">
                    <p>Laudantium, totam rem aperi, eaque ipsa quaea illo sol <br/> invente
                    veritatis eta quasi architecto sach sunt<br/> voluptatem quia voluptas.<br/>
                    sit aspernatur aut adita aut fugit, sed quia <br/> consequuntur.<br/>
                    eos qui ratione voluptatem sequi nesciun</p>
                </div>
                <div className="rating">
                    <section id="star-rating">
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="unawarded-star" src={unawarded} alt="an unhighlighted star"/>
                    </section>
                    <section id="customer-name">IPSUM LOREM</section>
                </div>
            </div>
        </div>
        <div className='review-card'>
            <img className="customer-photo" src={secondCustomer} alt="a happy customer"/>
            <div className='card-body'>
                <div className="review-text">
                    <p>Laudantium, totam rem aperi, eaque ipsa quaea illo sol <br/> invente
                    veritatis eta quasi architecto sach sunt<br/> voluptatem quia voluptas.<br/>
                    sit aspernatur aut adita aut fugit, sed quia <br/> consequuntur.<br/>
                    eos qui ratione voluptatem sequi nesciun</p>
                </div>
                <div className="rating">
                    <section id="star-rating">
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="stars-of-five" src={awarded} alt="highlighted star"/>
                        <img className="unawarded-star" src={unawarded} alt="an unhighlighted star"/>
                    </section>
                    <section id="customer-name">IPSUM LOREM</section>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default CustomerReviews