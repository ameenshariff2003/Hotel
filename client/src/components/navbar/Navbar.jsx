import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContain">
      <Link className='logoStyle' to="/">
        <span className="logo">HOLLYDAY</span>
      </Link>
        
        <div className="navItems">
          <button className="navBtn btn">Register</button>
          <button className="navBtn btn">Login</button>

        </div>

      </div>
    </div>
  )
}
