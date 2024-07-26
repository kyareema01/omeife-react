import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className="item">

        <ul style={{paddingLeft: '0rem'}}>
            <li class="list">
                <Link href="#">
                    Home
                </Link>
            </li>
            <li cass="list">
                <Link href="#">
                    Services
                </Link>
            </li>
            <li class="list">
                <Link href="#">
                    About Us
                </Link>
            </li>
            <li class="list">
                <Link href="#">
                    Contact Us
                </Link>
            </li>
            <li class="list">
                <Link href="#">
                    Blog
                </Link>
            </li>
        </ul>
    </div>
  )
}
