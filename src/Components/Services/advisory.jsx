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
        title={'Advisory Services'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"Gain insights from our clients' perspectives on how our services have revolutionized their technological landscape. Their feedbacks highlight our collaborative approach, technical expertise, and the tangible benefits our services bring to diverse industries."}
      />

      <ServicesPanel 
        boldHeader={'A. Individuals:'}
        text={'We offer advisory services to individuals such as higher institution students and organizations undertaking research projects in fields like AI, robotics, IoT, 3D design/printing, and related technologies, providing guidance on research methodologies, data analysis, and implementation strategies. We also provide comprehensive assistance in defining the scope, selecting methodologies, and refining the research processes to ensure that the projects are not just academically rigorous but also contribute meaningfully to their field of study.'}

        boldHeaderSecond={'B. Optimising Establishments and Customized Solutions:'}
        secText={'The Powerhouse of Efficiency: Our industrial manipulator is . a game-changer in handling heavy and bulky products. Engineered for optimization, it exemplifies precision and speed, revolutionizing the way materials are lifted and transported. This not only saves time and energy but also significantly enhances productivity in various industrial applications. With our manipulator, tasks that were once daunting are now effortlessly manageable.'}
        hasTwoParagraphs={true}
      />

      <ServicesPanel 
        boldHeader={'C. Strategic Planning and Regulatory Compliance:'}
        text={'Omeife Technologies is your strategic partner in navigating the complexities of technology-driven strategic planning and regulatory compliance. Our advisory services are designed to empower organizations to embrace innovation while ensuring adherence to legal, ethical, and regulatory standards in a dynamic and ever-changing technological environment. This also covers advisory services on risk assessment and mitigation, ethical considerations and continuous monitoring and adaptation.'}
        
        boldHeaderSecond={'D. Government and Non-Governmental Organization Collaborations:'}
        secText={'We engage in collaboration between governments and NGOs to drive impactful initiatives in technology-related fields. We facilitate strategic partnerships to address shared goals in technology advancements in technology policy formation, project design and implementation plan, capacity building programs, public awareness and advocacy, impact assessment and reporting, and Sustainable Development Goals alignment.'}

        boldHeaderThird={'E. International Reach:'}
        thirdText={'We are committed to making a positive impact globally. Through our international reach, we seek to bridge technological divides, foster innovation on a global scale, and contribute to the advancement of societies worldwide. We are a catalyst for cross-border collaboration by connecting with organizations, businesses, and governmental bodies worldwide. We also Offer technology solutions with a global mindset by embracing cultural sensitivity, localizing our solutions and actively participating in global forums, conferences, and collaborative initiatives to contribute to the collective dialogue on technological growth. '}

        boldHeaderFourth={''}
        fourthText={'' }
        reverse={true}
        hasThreeParagraphs={true}
      />

    <Footer />
    </>
  )
}
