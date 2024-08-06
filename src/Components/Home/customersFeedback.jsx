import React, { useState } from 'react'
import CompHeaderInfo from '../re-use/compHeaders'
import { feedbacks } from '../re-use/carouselData'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'
import vec from './../../imgs/customer-svgR.svg'
import vecR from './../../imgs/customer-svgL.svg'

import Carousel from 'react-bootstrap/Carousel';

export default function CustomersFeedback() {
  const [action, setAction] = useState(0)
  
  return (
    <>
      <CompHeaderInfo 
      title={'Customer Feedbacks'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={"Gain insights from our clients' perspectives on how our services have revolutionized their technological landscape. Their feedbacks highlight our collaborative approach, technical expertise, and the tangible benefits our services bring to diverse industries."}
      />


     <div className="cs-contents">
        <img src={vecR} />

          <div className="cs-card">
            <Carousel onSlide={()=> setAction(action === 2 ? 0 : action +1)}>
              {feedbacks.map((feedback) => (
                <Carousel.Item className='feedback' key={feedback.id}>
                  <div className='img-cs'>
                    <img
                      src={feedback.imgId}
                      alt={feedback.name}
                    />
                  </div>
                  
                  <p>{feedback.feedback}</p>
              
                  <h3>- {feedback.name}</h3>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="indicators second">
              {feedbacks.map((_, index) => (
                <span key={index} className={`indicator ${action === index ? 'display' : ''}`}></span> 
              ))}
            </div>
          </div>

         <img src={vec} />
    </div>
    </>
  )
}