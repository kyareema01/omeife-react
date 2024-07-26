import React from 'react';
import './../../../index.js';
import { Link } from 'react-router-dom';

function NavigationList() {
  return (
    <div>
      <ul className="underlist">
        <li className="list">
          <Link id="active" to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="services-page">Services</Link>
        </li>
        <li className="list">
          <Link to="AboutUs">About Us</Link>
        </li>
        <li className="list">
          <Link to="Team-page">Team</Link>
        </li>
        <li className="list">
          <Link to="Blog-page">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationList;
