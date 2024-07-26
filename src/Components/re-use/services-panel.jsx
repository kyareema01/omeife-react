import './../index.css'

export default function ServicesPanel({ text, secText, boldHeader, reverse, thirdText }) {
  return (

  <div className='advisory'>
    {!reverse ? ( 
      <>
    <div className="advisory-left-content">
        <p>
          <span>{boldHeader}</span>
          {text}
        </p>
          
        <p>
          <span>{boldHeader}</span>
          {secText}
        </p>
      </div>

     <div className="advisory-right-content">
  </div>
  </>
  ) : (
      <>
      <div className="advisory-right-content">

      </div>

      <div className="advisory-left-content">
        <p>
          <span>{boldHeader}</span>
          {text}
        </p>
        
        <p>
          <span>{boldHeader}</span>
          {secText}
        </p>

        <p>
          <span>{boldHeader}</span>
          {thirdText}
        </p>
      </div>
    </>
  )}
  </div>
 )
}
