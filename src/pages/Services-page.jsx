import React from 'react'
import Advisory from '../Components/Services/advisory';
import AiProducts from '../Components/Services/ai-products';
import ControlandAutomation from '../Components/Services/control-automation'
import Manufacturing from '../Components/Services/manufacturing'
import Training from '../Components/Services/training'
import RobotasaService from '../Components/Services/robot';

export default function ServicesPage() {
  return (
    <>
      <Advisory />
      <AiProducts />
      <ControlandAutomation />
      <Manufacturing />
      <Training />
      <Training />
    </>
  )
}
