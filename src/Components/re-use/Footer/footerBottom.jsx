import React from 'react'
import member from '../../../imgs/Uniccon Logo 1.png';
import X from '../../../imgs/Frame 15.svg';
import linkedln from '../../../imgs/Frame 16.svg';
import facebook from '../../../imgs/Frame 17.svg';
import instagram from '../../../imgs/Frame 18.svg';
import youtube from '../../../imgs/Frame 19.svg'

export default function FooterBottom() {
  return (
    <div className="item bottom">
        <div className="uniccon">
            <p>Member of:</p>
            <img src={member} alt='img' />
        </div>

        <div className="socials">
            <img src={X} alt='img' />
            <img src={linkedln} alt='img' />
            <img src={facebook} alt='img' />
            <img src={instagram} alt='img' />
            <img src={youtube} alt='img' />
        </div>
    </div>
  )
}
