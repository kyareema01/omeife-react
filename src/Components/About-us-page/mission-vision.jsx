import React from 'react'
import { MissionVisionData } from './core-values-data'

export default function MissionVision() {
  return (
    <article className='mission vision'>
      {MissionVisionData.map((content, index) =>(
      <div className="mission-vision" key={index}>
        <div className="mission-vision-img-cont">
          <img src={content.imgId} />
        </div>

        <div className="mission-vision-info">
          <h3>{content.Header}</h3>
          <p>{content.text}</p>
        </div>
      </div>
      ))}  
    </article>
  )
}
