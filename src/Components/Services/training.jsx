import React from 'react'
import Header from '../re-use/Header/header'
import Footer from '../re-use/Footer/footer'
import img from './../../imgs/services-rob.png';
import CompHeaderInfo from '../re-use/compHeaders'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'
import ServicesSecPanel from '../re-use/services-sec-panel'

export default function Advisory() {
  return (
    <>

      <Header
        image = {<div className="header-image">
           <img src={img} alt="Header" />
        </div>}
      />

      <CompHeaderInfo 
        title={'Training'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"At Omeife Technologies, we are dedicated to skill enhancement through our comprehensive training programs and continuous learning platforms."}
      />

      <ServicesSecPanel 
        text={'In collaboration with UNICCON Institute of Technology, another subsidiary of the UNICCON Group of Companies, our training services include technology workshops, professional development courses, and customised corporate training in but not limited to the following areas: Data Science/Analysis, IoT, Cybersecurity, 3D design and printing, Drone Technology, Robotics, Blockchain technology, etc. To learn more, visit the UIT website on ().'}

        reverse={true}
      />

      <Footer />
    </>
  )
}
