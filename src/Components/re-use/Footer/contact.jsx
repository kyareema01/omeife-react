import React from 'react'
import whatsapp from '../../../imgs/Frame 34.svg'
import gmail from '../../../imgs/gmail.svg';

export default function Contact() {
  return (
    <div className="item">
        <div className="contacts-container">
            <div className="whatsapp">
                <img src={whatsapp} alt='img' />
                <div class="contacts">
                    <p>+2349137160848</p>
                    <p>+2349131574290</p>
                </div>
            </div>

            <div className="gmail">
                <img src={gmail} alt='img' />
                <p>info@uniccongroup.com</p>
            </div>
        </div>
    </div>
  )
}
