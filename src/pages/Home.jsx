import React from 'react'
// import HamburgerMenu from './HamburgerMenu'; 
import Header from './../Components/re-use/Header/header';
import ServicesBody from '../Components/Home/servicesCards';
import WhyChooseUs from '../Components/Home/whyChooseUs';
import HeaderCarousel from '../Components/Home/headerCarousel';
import CustomersFeedback from '../Components/Home/customersFeedback';
import Footer from '../Components/re-use/Footer/footer';

export default function Home() {
  return (
    <>
      <Header />

        <HeaderCarousel />  
        <WhyChooseUs />
        <ServicesBody />    
        <CustomersFeedback />

      <Footer />
    </>
  )
}
