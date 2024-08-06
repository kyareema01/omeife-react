import React, { useState } from "react";
import folder from './../../imgs/folder-open-rounded 1.svg'
import admin from './../../imgs/person-fill.svg'
import comment from './../../imgs/Message 26.svg'
import { blogList } from "./blogData";
import { Link } from "react-router-dom";
import CompHeaderInfo from "../re-use/compHeaders";
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

function Category({ News}) {
  return (
    <div className="category">
    <img src={folder} />
    <p className="category-comp">{News ? "Posted in: News, Omeife (Africa’s 1st Humanoid Robot), What's New" : 'Posted in: CyberSecurity'}</p>
    </div>
  )
}

function Admin({ isAdmin }) {
  return (
    <p className="admin">{isAdmin ? 'by admin' : ''}</p>
  )
}

export default function Blogs() {
  const [Continue, setContinue] = useState(true);

  const date = new Date()

  const comments = blogList[0].comments;
  console.log(comments)

  return (
    <>
      <CompHeaderInfo 
        title={'Our Latest Blog'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={'Explore the future of sustainable business practices and how they can benefit both your company and the planet. Gain insights into innovative eco-friendly strategies.'}
      />

      <div className="blogs">
        {blogList.map((content, index) =>(
          <div className="cards" key={index}>
          <div className="card-content-cont">
            <div className="img blog-container">
              <img className="main-img" src={content.imageId} alt={content.alt} />

              <div className="img-details">
                <div className="left-info">
                  <img src={admin} alt={content.alt} />
                   <Admin isAdmin={true} /> |
                  <img src={comment} alt={content.alt} />
                  {comments.length}
                </div>

                <div className="right-info">
                  <div className="day">
                  {date.getDate() + 1}
                  </div>

                  July
                  {' ' + date.getFullYear()}
                </div>
              </div>
            </div>
            
            <div className="content">
              <div className="text">
              <h3>{content.header}</h3>
              <p>{content.description}
                <Link to={''}>{Continue ? '… Continue' : ''}</Link>
              </p> 
              </div>

                <Category News={!true} />
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}