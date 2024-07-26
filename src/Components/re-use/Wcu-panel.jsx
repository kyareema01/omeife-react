import '../../index.css';

export default function Panel({ text, btnText, imgSrc}) {
    return (
        <div className='wcu-content'>
        <div className="left-content">
            <p>{text}</p>
            <button>{btnText}</button>
        </div>

        <div className="right-content">
            <img src={imgSrc} alt='img' />
        </div>
    </div>
 )
}