import React from "react";
import img from './../imgs/AboutUs-header.svg'
import AboutUsSection from "./../Components/About-us-page/About-us-section";
import CoreValues from "../Components/About-us-page/core-values";
import MissionVision from "../Components/About-us-page/mission-vision";
import Header from "../Components/re-use/Header/header";
import Footer from "../Components/re-use/Footer/footer";

export default function AboutUs() {
  return (
    <>
    <Header 
      image = {<div className="header-image">
        <img src={img} alt="Header" />
     </div>}
    />

      <AboutUsSection />
      <CoreValues />
      <MissionVision />
      
    <Footer />
    </>
  )
}