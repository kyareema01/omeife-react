import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className="item">

        <ul style={{paddingLeft: '0rem'}}>
            <li class="list">
                <Link to="/">
                    Home
                </Link>
            </li>
            <li cass="list">
                <Link to="/Services-page">
                    Services
                </Link>
            </li>
            <li class="list">
                <Link to="/AboutUs">
                    About Us
                </Link>
            </li>
            <li class="list">
                <Link to="/Team">
                    Team
                </Link>
            </li>
            <li class="list">
                <Link to="/Contact-us">
                    Contact Us
                </Link>
            </li>
            <li class="list">
                <Link to="/Blog">
                    Blog
                </Link>
            </li>
        </ul>
    </div>
  )
}
