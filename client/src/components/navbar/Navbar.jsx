import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContain">
        <span className="logo">HOLLYDAY</span>
        <div className="navItems">
          <button className="navBtn btn">Register</button>
          <button className="navBtn btn">Login</button>

        </div>

      </div>
    </div>
  )
}
