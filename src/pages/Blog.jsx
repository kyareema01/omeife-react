import React from 'react'
import Blogs from '../Components/Blog-page/blogs'
import img from './../imgs/Blog ai 1.png'
import Header from '../Components/re-use/Header/header'
import Footer from '../Components/re-use/Footer/footer'

export default function Blog() {
  return (
    <>
    <Header 
       image = {<div className="header-image">
        <img src={img} alt="Header" />
     </div>}
    />

    <Blogs />

    <Footer />
    </>
  )
}
