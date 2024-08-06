import React from 'react';
import Home from './pages/Home';
import ServicesPage from './pages/Services-page';
import AboutUs from './pages/About-us';
import Team from './pages/Team';
import Blog from './pages/Blog';
import ContactUs from './pages/contact-us';

const App  = () => {
  
  return (
    <>
      <Home />
      <ServicesPage />
      <AboutUs />
      <Team />
      <Blog />
      <ContactUs />
    </>
  );
}

export default App;