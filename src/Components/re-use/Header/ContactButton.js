import React from 'react';
import './../../../index.css'

function ContactButton() {

  const route = () => {
    window.location.href = '/contact-us'
  }

  return (
    <button onClick={route} className="btn" id="btn">
      Contact Us
    </button>
  );
}

export default ContactButton;
