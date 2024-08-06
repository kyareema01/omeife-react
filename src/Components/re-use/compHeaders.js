import './../../index.css';

export default function CompHeaderInfo({ imgSrc, imgSrcRight, title, text}) {
    return (
        <>
         <div className="comp-header">
            <div className="top-header">
                <img src={imgSrc} alt='svg' />
                <h2>{title}</h2>
                <img src={imgSrcRight} alt='svgR' />
            </div>
            <div className="bottom-header">
                <p>{text}</p>
            </div>
         </div>
        </>
    )
}