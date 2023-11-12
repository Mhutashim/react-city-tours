import React from 'react'
import img from '../../logo.svg';
import navbar from './Navbar.scss';

export default function Navbar() {
  return (
      <nav className='navbar'>
        <img src={img} alt='City Tours'></img>
        {/* ul.nav-links */}
        <ul className="nav-links">
          {/* li>a.nav-link */}
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/" className="nav-link">About</a></li>
          <li><a href="/" className="nav-link active">Tours</a></li>
        </ul>
      </nav>
  )
}
