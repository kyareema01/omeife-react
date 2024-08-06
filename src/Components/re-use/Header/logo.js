import React from 'react';
import Img from '../../../imgs/Omeife Logo_Modified 1.svg'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={Img} alt="Omeife Logo" />
      </Link>
    </div>
  );
}

export default Logo;
