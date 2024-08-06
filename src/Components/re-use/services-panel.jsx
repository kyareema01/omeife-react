import './../../index.css'

export default function ServicesPanel({ 
   text,
   secText,
   thirdText,
   fourthText,
   boldHeader,
   boldHeaderSecond,
   boldHeaderThird,
   boldHeaderFourth,
   hasTwoParagraphs,
   hasThreeParagraphs,
   reverse,
    }) {

  return (

  <div className='services-page'>
  {!reverse ? ( 
    <>
    <div className="services-p-left-content">
        <p>
          <span>{boldHeader + ' '}</span>
          {text}
        </p>
          
        <p>
          <span>{boldHeaderSecond + ' '}</span>
          {secText}
        </p>

        {!hasTwoParagraphs && (
          <>
          <p>
            <span>{boldHeaderThird + ' '}</span>
            {thirdText}
          </p>
          </>
        )}
        {!hasThreeParagraphs && !hasTwoParagraphs && (
          <>
            <p>
              <span>{boldHeaderFourth + ' '}</span>
              {fourthText}
            </p>
          </>
        )}
    </div>

     <div className="services-p-right-content"></div>
  </>
  ) : (
    <>
      <div className="services-p-right-content"></div>

      <div className="services-p-left-content">
        <p>
          <span>{boldHeader + ' '}</span>
          {text}
        </p>
          
        <p>
          <span>{boldHeaderSecond + ' '}</span>
          {secText}
        </p>

        {!hasTwoParagraphs && (
          <>
            <p>
              <span>{boldHeaderThird + ' '}</span>
              {thirdText}
            </p>
          </>
        )}
        {!hasThreeParagraphs && !hasTwoParagraphs && (
          <>
          <p>
            <span>{boldHeaderFourth + ' '}</span>
            {fourthText}
          </p>
        </>
        )}
    </div>
    </>
  )}
  </div>
 )
}

