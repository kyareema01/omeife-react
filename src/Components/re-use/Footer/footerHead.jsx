import React from 'react'
import img from '../../../imgs/Omeife Logo_Modified 1.svg';

export default function FooterHead() {
  return (
    <div className="footer-head">
        <div className="item">
            <img src={img} alt='img' />
            <p>With our robust team of experts in various related fields, we offer consultancy/advisory services that cut across several endeavours.</p>
        </div>
    </div>
  )
}
