import { createBrowserRouter} from 'react-router-dom';
// import ContactPage from './pages/contact-us';
import Home from './pages/Home';
import Advisory from './Components/Services/advisory';
import RobotasaService from './Components/Services/robot';
import Manufacturing from './Components/Services/manufacturing';
import ControlandAutomation from './Components/Services/control-automation';
import AiProducts from './Components/Services/ai-products';
import Training from './Components/Services/training';
import AboutUs from './pages/About-us';
import Team from './pages/Team';
import Blog from './pages/Blog';
import ContactUs from './pages/contact-us';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  
  {
    path: '/advisory',
    element: <Advisory />,
  }, {
    path: 'robot',
    element: <RobotasaService />,
  }, {
    path: '/manufacturing',
    element: <Manufacturing />,
  }, {
    path: '/control-automation',
    element: <ControlandAutomation />,
  }, {
    path: '/ai-products',
    element: <AiProducts />,
  }, {
    path: '/training',
    element: <Training />,
  },

  {
    path: '/AboutUs',
    element: <AboutUs />
  },
  
  {
    path: '/Team',
    element: <Team />
  },

  {
    path: '/Blog',
    element: <Blog />
  },

  {
    path: '/contact-us',
    element: <ContactUs />
  }

]);
