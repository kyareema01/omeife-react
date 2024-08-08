import React, { useState } from 'react';
import './../../../index.js';
import { Link, useLocation } from 'react-router-dom';
import chevron from './../../../imgs/chevron-down.svg';

function NavigationList({ onServiceValueChange }) {

  const location = useLocation()

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleClick = () => {
    setDropdownOpen((prev) => !prev)
  }

  const isActive = (path) => location.pathname === path

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
          <Link id={isActive('/') ? 'active' : '' } to="/">Home</Link>
        </li>

        <li className={`list dropdown ${dropdownOpen ? 'open' : ''}`}>
          <a to="#" onClick={handleClick} id={isActive(services.path) ? 'active' : '' }>Services</a>
          <img onClick={handleClick} src={chevron} />
        </li>

        {dropdownOpen &&
         ( <div className='dropdown-contents'>
          <ul>
            {services.map((service, index) => {
              let listIndex = ''
              if (index === 0) {
                listIndex = 'first'
              } else if (index === 1) {
                listIndex = 'second'
              } else if (index === 2) {
                listIndex = 'third'
              } else if (index === 3) {
                listIndex = 'fourth'
              } else {
                listIndex = 'fifth'
              }

              return (
                <li key={index} style={{top: `${0 + index * 2}px`}} className={`dropdown ${listIndex}`}>
                  <Link to={service.path} onClick={() => onServiceValueChange(service.name)}>
                    {service.name}
                  </Link>
               </li>
              )
            })}
          </ul>
        </div>
        )}

        <li className="list">
          <Link id={isActive('/AboutUs') ? 'active' : '' } to="/AboutUs">About Us</Link>
        </li>
        <li className="list">
          <Link id={isActive('/Team') ? 'active' : '' } to="/Team">Team</Link>
        </li>
        <li className="list">
        <Link id={isActive('/Blog') ? 'active' : '' } to="/Blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationList;
