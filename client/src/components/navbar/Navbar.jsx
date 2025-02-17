import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Login from '../../pages/login/Login'

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className="navContain">
        <Link className='logoStyle' to="/">
          <span className="logo">HOLLYDAY</span>
        </Link>

        <div className="navItems">
        <Link to="/register">
            <button className="navBtn btn">Register</button>
</Link>


            <Link to="/login">

          
          <button className="navBtn btn">Login</button>
          </Link>

        </div>

      </div>
    </div>
  )
}
