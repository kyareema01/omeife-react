import React from 'react';
import rightVec from './../../imgs/contact-r-vec.svg';
import line from './../../imgs/line.svg';
import rightBlob from './../../imgs/contact-right.png';

export default function Blob() {
  const blob = [{
    key: 0,
    vec: rightVec,
    line: line,
    text: 'Let’s hear from you.'
  }, {
    key: 1,
    vec: rightVec,
    line: line,
    text: 'Your feedback is Valuable to us.'
  }, {
    key: 2,
    vec: rightVec,
    text: 'Thank you for choosing Us.' 
  }];

  return (
    <div className='blob-container relative'>
      <span className='blob-background'>
        <img src={rightBlob} alt="Background" />
      </span>

      <div className="blob-section">
        {blob.map((item, index) => {
          let cardIndex = index === 0 ? 'first' : index === 1 ? 'second' : 'third';

          return (
            <div className={`vec ${cardIndex}`} key={index}>
              <div className="left">
                <img src={item.line} className={`line ${cardIndex}`}/>

                <div className="svg">
                  <img src={item.vec} alt="vec" />
                </div>
              </div>

              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
