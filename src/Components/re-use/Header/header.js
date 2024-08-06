import Logo from "./logo";
import NavigationList from "./NavigationList";
import ContactButton from "./ContactButton";
import { useState } from "react";
import Advisory from "../../Services/advisory";
import AiProducts from "../../Services/ai-products";
import RobotasaService from "../../Services/robot";
import Manufacturing from "../../Services/manufacturing";
import ControlandAutomation from "../../Services/control-automation";
import Training from "../../Services/training";
import Hamburger from "./hamburger";

export default function Header({ image }) {

    const [selectedService, setSelectedService] = useState('')

    const handleSelectedService = (service) => {
        setSelectedService(service)
    }

    return (
        <>
          <header>
                <nav className="nav-header">
                    <Logo />
                    <NavigationList onServiceValueChange={handleSelectedService}/>
                    <ContactButton />
                    <Hamburger />
                </nav>
           </header>
            {image}
            {selectedService === 'Advisory Services' && <Advisory />}
            {selectedService === 'Robot-as-a-Service' && <RobotasaService />}
            {selectedService === 'Ai-products' && <AiProducts />}
            {selectedService === 'Manufacturing Services' && <Manufacturing />}
            {selectedService === 'Control and Automation' && <ControlandAutomation />}
            {selectedService === 'Training' && <Training />}
        </>
    )
}