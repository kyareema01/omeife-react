import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hamburger() {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const contactPage = () => {
    window.location.href = '/contact-us'
  }

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Team', path: '/Team' },
    { name: 'Blog', path: '/Blog' },
  ]

  return (
    <>
    <div className={`menu-toggle ${open ? 'change' : '' }`} onClick={toggle}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>

    {open && (
      <div className='hamburger-menu'>
        <ul>
          {pages.map((page, index)=> (
            <li key={index}>
              <Link to={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <div class="hamburger-btn">
          <button id="ham-btn" onClick={contactPage}>Contact Us</button>
        </div>
    </div>
    )}
 </>
  )
}
