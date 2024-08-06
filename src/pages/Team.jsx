import React from 'react'
import Management from '../Components/Team/management'
import img from './../imgs/team-robo.png'
import Header from '../Components/re-use/Header/header'
import Footer from '../Components/re-use/Footer/footer'

export default function Team() {
  return (
    <>
    <Header 
      image = {<div className="header-image">
        <img src={img} alt="Header" />
     </div>}
    />

      <Management />

      <Footer />
    </>
  )
}
