import React from 'react';
import '../../index.css';

export default function Panel({ text, btnText, imgSrc, aboutUs, secondText}) {
    return (
     <>
    {!aboutUs ? (
        <div className='wcu-content'>
        <div className="left-content">
            <p>{text}</p>
            <button>{btnText}</button>
        </div>

        <div className="right-content">
            <img src={imgSrc} alt='img' />
        </div>
    </div>
    ) : (
     <div className='About-us-content'>
        <div className={`left-content ${aboutUs ? 'about-us' : ''}`}>
            <p>{text}</p>
            <p>{secondText}</p>
        </div>

        <div className={`right-content ${aboutUs ? 'reverse' : ''}`}>
            <img src={imgSrc} alt='img' />
        </div>
    </div>
  )}
  </>
 )
}