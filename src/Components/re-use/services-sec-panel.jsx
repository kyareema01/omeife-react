import React from 'react'

export default function ServicesSecPanel({ boldHeader, text, reverse }) {
  return (
    <figure>
     <div className='sec-panel'>
      {!reverse ? (
        <>
          <div className="left-service">
            <div className="left-service-inner"></div>
          </div>

          <div className="right-service">
            <p><span>{boldHeader + ' '}</span>{text}</p>
          </div>  
         </>
      ) : (
        <div className={`sec-panel ${reverse ? 'reverse' : ''}`}>
         <div className={`right-service ${reverse ? 'reverse' : ''}`}>
          <p>{text}</p>
         </div>  

          <div className={`left-service ${reverse ? 'reverse' : ''}`}>
            <div className="left-service-inner"></div>
          </div>
         </div>
      )}
    </div> 
    </figure>
  )
}
