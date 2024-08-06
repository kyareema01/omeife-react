import React from 'react'
import Input from './../Components/Contact-us/input'
import Blob from '../Components/Contact-us/blob'
import Header from '../Components/re-use/Header/header'
import Footer from '../Components/re-use/Footer/footer'
import img from './../imgs/contact-us-rob.png'
import CompHeaderInfo from '../Components/re-use/compHeaders'
import svg from './../imgs/avg-left.svg'
import svgR from './../imgs//svg-right.svg'

const ContactUs = () => {
  return (
    <>
    <Header 
      image = {<div className="header-image">
        <img src={img} alt="Header" />
     </div>}
    />

    <CompHeaderInfo 
      title={'Contact Us'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={"Our dedicated and responsive team is ready to address your inquiries, offer insights, and explore the possibilities of integrating cutting-edge technology into your business or project. We do love to hear from you."}
    />

      <main>
        <Input />
        <Blob />
      </main>
      
      <Footer />
    </>
  )
}

export default ContactUs