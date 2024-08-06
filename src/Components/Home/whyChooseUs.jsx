import React from 'react';
import Panel from '../re-use/Wcu-AboutUs-panel';
import wcuImg from './../../imgs/wcu.png'
import CompHeaderInfo from '../re-use/compHeaders';
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function WhyChooseUs() {
  return (
    <>
      <CompHeaderInfo 
         title={'Why Choose Us'}
         imgSrc={svg}
         imgSrcRight={svgR}
         text={'Selecting us mean choosing a synergy of expertise in Robotics, AI, and Embedded Systems., where a dedicated team of experts combines passion with precision, delivering solutions that redefine possibilities and drive your success in the digital era'}
      />

      <Panel 
        text={'At Omeife Technologies, we are committed to pioneering solutions that redefine industrial and office automation. Our products are not just tools; they are partners in your journey towards efficiency, safety, and innovation. Embrace the future with us - where robotics and human ingenuity meet to create extraordinary outcomes.'}
        btnText={'Explore More'}
        imgSrc={wcuImg}
      />
    </>
  )
}
