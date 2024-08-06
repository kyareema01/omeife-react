import React from 'react'
import Header from '../re-use/Header/header'
import Footer from '../re-use/Footer/footer'
import img from './../../imgs/services-rob.png';
import ServicesPanel from './../re-use/services-panel'
import CompHeaderInfo from '../re-use/compHeaders'
import svg from './../../imgs/avg-left.svg'
import svgR from './../../imgs/svg-right.svg'

export default function AiProducts() {
  return (
    <>

      <Header
        image = {<div className="header-image">
           <img src={img} alt="Header" />
        </div>}
      />

      <CompHeaderInfo 
        title={'Ai Products and Services'}
        imgSrc={svg}
        imgSrcRight={svgR}
        text={"Omeife Technologies offers a comprehensive suite of AI products and services tailored to meet the diverse linguistic and educational needs of users. Let's delve into the key features of these AI offerings."}
      />

      <ServicesPanel 
        boldHeader={'1. API As a Service (AAAS):'}
        text={'These APIs offer seamless integration into diverse systems and tech solutions. They also hold endless possibilities and use cases.'}

        boldHeaderSecond={'A. Multilingual Translation APIs:'}
        secText={'Omeife Technologies provides APIs supporting multilingual translation, initially focusing on African languages such as Igbo, Yoruba, Pidgin, and Hausa. The roadmap includes plans to expand this capability to include French, Arabic, and Swahili shortly. This feature facilitates seamless communication and content dissemination across a broad linguistic spectrum.'}

        boldHeaderThird={'B. Speech Synthesis APIs:'}
        thirdText={'The text-to-speech AI solution enables users to consume content in their local languages without reading. Currently available for Igbo, Yoruba, Pidgin, and Hausa, with French, Arabic, and Swahili in the pipeline. This functionality enhances accessibility, making textual content available as audio for easy comprehension.'}

        boldHeaderFourth={'C. Speech Recognition APIs:'}
        fourthText={'e also offer APIs for speech recognition, allowing users to convert audio or spoken words from various African languages to text. Currently supporting Igbo, Yoruba, Pidgin, and Hausa, with French, Arabic, and Swahili integration on the horizon. This technology enhances transcription capabilities and facilitates diverse applications.'}

        hasTwoParagraphs={false}
        hasThreeParagraphs={false}
      />

      <ServicesPanel 
        boldHeader={'2. Omeife Ai App:'}
        text={'The Omeiife AI App, available both on mobile and as a web application offers the following:'}

        boldHeaderSecond={'A. Digital Literacy:'}
        secText={'This is a learning support service that provides extensive knowledge of digital literacy and delivers said content in any of the available selected African languages and English. (Igbo, Yoruba, Pidgin, and Hausa. French, Arabic and Swahili coming soon).'}

        boldHeaderThird={'B. Knowledge Assistant:'}
        thirdText={'This is a personal learning assistant that possesses and can provide a vast knowledge of Africa, its people, heritage, culture and so much more. This too is available in several African languages. (Igbo, Yoruba, Pidgin, and Hausa. French, Arabic and Swahili coming soon).'}

        boldHeaderFourth={'C. Subtitle Translation:'}
        fourthText={'This service converts available subtitles in audiovisual materials into any selected African Language. (Igbo, Yoruba, Pidgin, and Hausa. French, Arabic and Swahili coming soon).'}

        reverse={true}
        hasTwoParagraphs={false}
        hasThreeParagraphs={false}
      />

      <Footer />
    </>
  )
}
