import React from 'react'
import DarkVariantExample from './../re-use/CarouselItem'
import { carouselData } from './../re-use/carouselData'

export default function HeaderCarousel() {
  return (
    <>
      <DarkVariantExample
        Data={carouselData}
      />
    </>
  )
}
