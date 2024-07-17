import { createBrowserRouter} from 'react-router-dom';
import ServicesPage from './pages/Services-page';
import ContactPage from './pages/contact-us';
import Home from './pages/Home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'services-page',
    element: <ServicesPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
]);
