import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_container'>
    <div className='navbar_content container'>
        <div className='logo'>
            LOGO
        </div>

        <div className='menu-links'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
        </div>
    </div>
</div>
  )
}

export default Navbar