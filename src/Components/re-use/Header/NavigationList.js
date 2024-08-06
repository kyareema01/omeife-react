import React, { useState } from 'react';
import './../../../index.js';
import { Link } from 'react-router-dom';
import chevron from './../../../imgs/chevron-down.svg';

function NavigationList({ onServiceValueChange }) {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleClick = () => {
    setDropdownOpen((prev) => !prev)
  }

  const services = [
    { name: 'Advisory Services', path: '/advisory' },
    { name: 'Robot-as-a-service', path: '/robot' },
    { name: 'Ai-products', path: '/ai-products' },
    { name: 'Control and Automation', path: '/control-automation' },
    { name: 'Manufacturing Services', path: '/manufacturing' },
    { name: 'Training', path: '/training' },
  ];

  return (
    <div>
      <ul className="underlist">
        <li className="list">
          <Link id="active" to="/">Home</Link>
        </li>

        <li className={`list dropdown ${dropdownOpen ? 'open' : ''}`}>
          <a to="#" onClick={handleClick}>Services</a>
          <img src={chevron} />
        </li>

        {dropdownOpen &&
         ( <div className='dropdown-contents'>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <Link className='dropdown' to={service.path} onClick={() => onServiceValueChange(service.name)}>
                {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        )}

        <li className="list">
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li className="list">
          <Link to="/Team">Team</Link>
        </li>
        <li className="list">
        <Link to="/Blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationList;
