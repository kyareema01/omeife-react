import React from 'react'
import Header from '../re-use/Header/header'
import Footer from '../re-use/Footer/footer'
import img from './../../imgs/services-rob.png';
import ServicesPanel from './../re-use/services-panel'
import CompHeaderInfo from '../re-use/compHeaders'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function RobotasaService() {
  return (
    <>

      <Header
        image = {<div className="header-image">
           <img src={img} alt="Header" />
        </div>}
      />

      <CompHeaderInfo 
        title={'Robot as a Service'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"Revolutionizing Industrial Efficiency with Cutting-Edge Robotics and Automation Solutions At Omeife Technologies, we are at the forefront of transforming industrial workflows with our advanced robotic and automation solutions. Our innovative suite of products is designed to tackle the most challenging aspects of industrial operations, ensuring efficiency, safety, and precision."}
      />

      <ServicesPanel 
        boldHeader={'A. Omeife:'}
        text={"The Multifaceted Humanoid Robot: Meet Omeife, our humanoid robot - a versatile addition to any office setting. Omeife is not just a robot; it's a dynamic office assistant capable of providing language translation services and functioning efficiently as a receptionist. Its human-like interactions and advanced capabilities make it an invaluable asset in streamlining office operations and enhancing customer experiences."}

        boldHeaderSecond={'B. Industrial Manipulator:'}
        secText={'The Powerhouse of Efficiency: Our industrial manipulator is . a game-changer in handling heavy and bulky products. Engineered for optimization, it exemplifies precision and speed, revolutionizing the way materials are lifted and transported. This not only saves time and energy but also significantly enhances productivity in various industrial applications. With our manipulator, tasks that were once daunting are now effortlessly manageable.'}
        reverse={true}
        hasTwoParagraphs={true}
        hasThreeParagraphs={true}
      />

      <ServicesPanel 
        boldHeader={'C. Industrial Vacuum Cleaner:'}
        text={'Ensuring a Safe and Clean Environment: The safety and cleanliness of the industrial workspace are paramount. Our industrial vacuum cleaner is specifically designed to manage hazardous wastes such as chemicals, metals, and glass, which pose risks to human health. This powerful cleaner ensures that the working environment remains not only clean but also safe for employees, contributing to more effective and comfortable working conditions.'}
        
        boldHeaderSecond={'D. Restaurant Serving Robot:'}
        secText={'Revolutionizing Hospitality: Transforming the hospitality industry, our restaurant serving robot is designed to enhance the dining experience. It brings a new level of efficiency and novelty to restaurant services, ensuring prompt and accurate order delivery. This not only improves service quality but also adds an innovative touch to customer service.'}

        boldHeaderThird={'E. Advanced Control Software:'}
        thirdText={'The Brain Behind Operations: Our state-of-the-art control software is the intelligence driving our robotic solutions. It ensures seamless integration and coordination among various robotic systems, optimizing their  performance and reliability. This software is the backbone of our automation Solutions, enabling smooth and efficient operations.'}
        reverse={false}
        hasTwoParagraphs={false}
        hasThreeParagraphs={true}
      />

    <Footer />
    </>
  )
}
