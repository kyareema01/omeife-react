import React from 'react'
import Header from '../re-use/Header/header'
import Footer from '../re-use/Footer/footer'
import img from './../../imgs/services-rob.png';
import ServicesPanel from './../re-use/services-panel'
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
        title={'Manufacturing Services'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"Experience precision and reliability with our advanced production services. We specialize in crafting high-quality machine parts tailored to your specifications, ensuring optimal performance and durability for your applications and appliances. Our manufacturing services are in the following areas"}
      />

      <ServicesSecPanel 
        boldHeader={'A. Printed Circuit Board (PCB):'}
        text={'Omeife Technologies boasts a team of competent design experts proficient in creating innovative and functional Printed Circut Boards (PCB) designs who conceptualize and develop designs tailored to meet the unique requirements of clients. This is done using sophisticated applications for design and machinery for precision production.'}
      />

      <ServicesPanel 
        boldHeader={'A. Individuals:'}
        text={'We offer advisory services to individuals such as higher institution students and organizations undertaking research projects in fields like AI, robotics, IoT, 3D design/printing, and related technologies, providing guidance on research methodologies, data analysis, and implementation strategies. We also provide comprehensive assistance in defining the scope, selecting methodologies, and refining the research processes to ensure that the projects are not just academically rigorous but also contribute meaningfully to their field of study.'}

        boldHeaderSecond={'C. 3D Printing:'}
        secText={'The Powerhouse of Efficiency: Our industrial manipulator is . a game-changer in handling heavy and bulky products. Engineered for optimization, it exemplifies precision and speed, revolutionizing the way materials are lifted and transported. This not only saves time and energy but also significantly enhances productivity in various industrial applications. With our manipulator, tasks that were once daunting are now effortlessly manageable.'}
        hasTwoParagraphs={true}
      />

      <Footer />
    </>
  )
}
