import React from 'react'
import { ManagementData } from './mgtData'
import mgtImg from './../../imgs/management.svg'
import CompHeaderInfo from '../re-use/compHeaders'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs//svg-right.svg'

export default function Management() {
  
  return (
    <>
    <CompHeaderInfo 
      title={'Innovative Team'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={"Discover the faces behind our innovation, each bringing unique expertise and passion to the table. Together, we're shaping the future with determination and creativity."}
    />

    <div className="management">
      <img src={mgtImg} alt="mgt" />
      <p>Management</p>
    </div>

    <div className="mgt-row">
      {ManagementData.map((management, index) =>{

        let cardIndex = ''

        if (index === 0 || index === 3) {
          cardIndex='first'
        } else if (index === 1 || index === 4) {
          cardIndex = 'second'
        } else if (index === 2 || index === 5) {
          cardIndex = 'third'
        } 

        return (
        <div className={`mgt-card ${cardIndex}`} key={index}>
          <div className={`border- ${cardIndex}`}>
          <div className={`rectangle ${cardIndex}`}></div>
          <div className="bg"></div>
          <div className={`img-bg ${cardIndex}`}>
            <span>
              <img src={management.imgId}/>
            </span>
          </div>

          <div className="caption">
            <h3>{management.name}</h3>
            <p>{management.pos}</p>
          </div>
          </div>
        </div>
        );
      })}
      </div> 
    </>
  )
}
