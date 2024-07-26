import React from 'react'
import { services } from './servicesData'
import { GetImageUrl } from '../../utils/utils';
import CompHeaderInfo from '../re-use/compHeaders';
import svg from './../../imgs/svg-white-l.svg'
import svgR from './../../imgs/svg-white-r.svg'

    let firstRow = [];
    let secondRow = [];

    services.forEach(service =>{
        if (service.row === 'front row') {
           firstRow.push(service)
        } else if (service.row === 'second row') {
            secondRow.push(service)
        }
    })

export default function ServicesBody() {
  return (
    <>
    <div className='services'>
      <CompHeaderInfo 
      title={'Our Services'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={'We seamlessly integrate cutting-edge advancements into your projects, ensuring they stand at the forefront of progress in an ever-evolving digital ecosystem. Elevate your technological aspirations with our specialized services'}
      /> 

      <div>
        <div className="cards-container">
        {services.map((card, index) =>(
        <div className='services-card' key={index}>
            <img src={GetImageUrl(card)} alt={card.altText} />
            <p>{card.text}</p>
        </div>
        ))}
        </div>
      </div>
    </div>
    </>
  )
}