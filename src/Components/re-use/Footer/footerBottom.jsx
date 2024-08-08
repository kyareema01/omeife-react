import React from 'react'
import member from '../../../imgs/Uniccon Logo 1.png';
import X from '../../../imgs/Frame 15.svg';
import linkedln from '../../../imgs/Frame 16.svg';
import facebook from '../../../imgs/Frame 17.svg';
import instagram from '../../../imgs/Frame 18.svg';
import youtube from '../../../imgs/Frame 19.svg'
import { Link } from 'react-router-dom';

export default function FooterBottom() {
  return (
    <div className="item bottom">
        <div className="uniccon">
            <p>Member of:</p>
            <img src={member} alt='img' />
        </div>

        <div className="socials">
            <Link to={"https://x.com/iamomeife1"}><img src={X} alt='img' /></Link>
            <Link to={"https://www.linkedin.com/company/omeife-technologies/?viewAsMember=true"}><img src={linkedln} alt='img' /></Link>
            <Link to={"https://www.facebook.com/iamomeife"}><img src={facebook} alt='img' /></Link>
            <Link to={"https://www.instagram.com/omeifetechnologies/"}><img src={instagram} alt='img' /></Link>
            <Link to={"https://www.youtube.com/channel/UCfBcDbCfbire1LFBumtbVYg"}><img src={youtube} alt='img' /></Link>
        </div>
    </div>
  )
}