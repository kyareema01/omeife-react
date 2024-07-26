import React from 'react'
import { feedbacksData } from '../re-use/carouselData'
import svg from './../../imgs/Group (1).svg'
import svgR from './../../imgs//Group.svg'
import { Carousel } from 'bootstrap'

export default function CustomersFeedback() {
  return (
    <>
      <div className="cs-contents">
        <img src={svg} />

        <div class="cs-card">
          <Carousel>
              <div className="carousel-inner">
                {feedbacksData.map((feedb, index) => (
                  <Carousel.Item key={index}>
                    <img 
                      src={feedb.imgId} 
                      alt={feedb.name}
                    />
                    
                    <div>
                        <p>
                          {feedb.feedback}
                        </p>
                    </div>

                    <h3>{feedb.name}</h3>
                    </Carousel.Item>
                ))}
              </div>
              </Carousel>
        </div>

        <img src={svgR} />
    </div>
    </>
  )
}


{/* <div className="indicators second">
      <span className="indicator action"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
    </div> */}