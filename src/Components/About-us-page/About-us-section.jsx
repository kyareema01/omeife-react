import React from "react";
import AboutUsImg from './../../imgs/AboutUs-right.png' 
import Panel from "../re-use/Wcu-AboutUs-panel";
import CompHeaderInfo from "../re-use/compHeaders";
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function AboutUsSection() {
  return (
    <>
    <CompHeaderInfo 
      title={'About Us'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={'Learn how our journey unfolds, shaping a company that thrives on pushing technological boundaries and delivering transformative solutions to the ever-evolving landscape of advanced technology.'}
    />

      <Panel 
        text={'We work with individuals who have taken on research projects, establishments trying to optimise their methods, processes, designs or choice of materials, and Non-governmental Organisations embarking on large-scale research and production of solutions in robotics, IoT, AI and many other related fields.'}

        secondText={'We also work with governments on all levels including that of countries outside Nigeria, and offer them sustainable and uniquely tailored ideas and lasting solutions to be implemented. This also includes a detailed monitoring and evaluation plan to be carried out at set intervals.'}
        imgSrc={AboutUsImg}
        aboutUs={true}
      />
    </>
  )
}