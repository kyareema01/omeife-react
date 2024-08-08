import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample({ Data }) {
  const [active,setActive] =  useState(0);

  const route = () => {
    window.location.href = '/contact-us'
  }
  
  return (
    <div className='header carousel'>
    <Carousel onSlide={()=> setActive(prev => prev === 2 ? 0 : prev +1)} data-bs-theme="dark">
       {Data.map((value, index) =>(
         <Carousel.Item key={index}>
           <img
            className="d-block w-100"
            src={value.imgId}
            alt={value.name}  
            />
  
          <div className="getInTouch">
            <h2>{value.header}</h2>
            <p>{value.text}</p>
            <button className="btn" id="git-btn" onClick={route}>{value.btnText}</button>
          </div>
         </Carousel.Item>
       ))}
    </Carousel>

  <div className="indicators">
    {Data.map((_, index) =>(
      <span className={`dot ${active === index ? 'action' : ''}`}></span>
    ))}
  </div>
</div>
);
}

export default DarkVariantExample;
