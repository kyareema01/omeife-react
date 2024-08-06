import React from "react";
import { coreValuesData } from "./core-values-data";
import CompHeaderInfo from "../re-use/compHeaders";
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function CoreValues() {
  return (
    <>
    <CompHeaderInfo 
      title={'Core Values'}
      imgSrc={svg}
      imgSrcRight={svgR}
      text={'Our core values are excellence, teamwork, and a commitment to staying ahead of technological curves. We believe in not just meeting but exceeding expectations, ensuring our clients receive solutions that reflect our unwavering dedication to quality and innovation.'}
    />

    <div className="values">
      {coreValuesData.map((coreValue, index) => (
      <div className="card" key={index}>
        <div className="card-img-cont">
          <img src={coreValue.imgId} />
        </div>

        <h4>{coreValue.header}</h4>
        <p>{coreValue.text}</p>
      </div>
      ))}
    </div>
    </>
  )
}