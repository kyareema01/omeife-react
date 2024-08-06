import React from 'react'
import Header from '../re-use/Header/header'
import Footer from '../re-use/Footer/footer'
import img from './../../imgs/services-rob.png';
import ServicesPanel from './../re-use/services-panel'
import CompHeaderInfo from '../re-use/compHeaders'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function Advisory() {
  return (
    <>

      <Header
        image = {<div className="header-image">
           <img src={img} alt="Header" />
        </div>}
      />

      <CompHeaderInfo 
        title={'Control and Automation Services'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"We also specialise in the design and automation of environments, including homes, offices, factories, and farms. Our expertise extends beyond traditional manufacturing, incorporating automation solutions to enhance efficiency and productivity. We collaborate closely with clients to understand their specific needs, tailoring designs that optimize functionality and sustainability."}
      />

      <ServicesPanel 
        boldHeader={'A. Homes:'}
        text={'We design and implement smart home solutions, integrating automation for enhanced comfort, security, and energy efficiency.'}

        boldHeaderSecond={'B. Offices:'}
        secText={'Our services include the design and automation of office spaces to improve workflow, energy management, and overall productivity.'}

        boldHeaderThird={'C. Factories:'}
        thirdText={'Omeife Technologies provides automation solutions for factories, optimizing processes, reducing manual intervention, and improving overall operational efficiency.'}

        boldHeaderFourth={'D. Farms:'}
        fourthText={'Our expertise extends to agricultural automation, offering solutions that enhance precision farming, resource management, and overall agricultural productivity.'}

        hasTwoParagraphs={false}
        hasThreeParagraphs={false}
        reverse={true}
      />

      <Footer />
    </>
  )
}
