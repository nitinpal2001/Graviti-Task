import React from 'react'
import Logo from '../Assets/graviti-logo.svg'

// Importing css for Navbar
import '../Styles/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navlogo">
            <img src={Logo} alt="Graviti Logo" />
        </div>
    </div>
  )
}
