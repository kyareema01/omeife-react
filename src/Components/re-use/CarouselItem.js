import Carousel from 'react-bootstrap/Carousel';
import { carouselData } from './carouselData';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
        {carouselData.map((value, index) =>(
         <Carousel.Item key={index}>
           <img
            className="d-block w-100"
            src={value.imgId}
            alt={value.name}  />
  
          <div className="getInTouch">
              <h2>{value.header}</h2>
              <p>{value.text}</p>
              <button className="btn" id="git-btn">{value.btnText}</button>
          </div>

          <div class="indicators">
            <span class="dot action"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
         </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default DarkVariantExample;


// import React, { useEffect, useRef } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { carouselData } from './carouselData';

// function DarkVariantExample() {
//   const dotsRef = useRef([]);

//   useEffect(() => {
//     const dots = dotsRef.current;
//     let slideIndex = 0;
    
//     const showCurrentIndicator = () => {
//       dots.forEach(dot => dot.classList.remove("action"));
//       dots[slideIndex].classList.add('action');
      
//       slideIndex = (slideIndex + 1) % dots.length;
//     };

//     showCurrentIndicator();
//     const intervalId = setInterval(showCurrentIndicator, 4200);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <Carousel data-bs-theme="dark">
//       {carouselData.map((value, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={value.imgId}
//             alt={value.name}
//           />
//           <div className="getInTouch">
//             <h2>{value.header}</h2>
//             <p>{value.text}</p>
//             <button className="btn" id="git-btn">{value.btnText}</button>
//           </div>
//           <div className="indicators">
//             {carouselData.map((_, dotIndex) => (
//               <span
//                 key={dotIndex}
//                 className={`dot ${dotIndex === 0 ? 'action' : ''}`}
//                 ref={el => dotsRef.current[dotIndex] = el}
//               ></span>
//             ))}
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default DarkVariantExample;
