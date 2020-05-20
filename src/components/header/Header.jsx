import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo-harwoods.png'

const Header = () => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <img className='logo' src={logo} alt="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option1" to='/contact'>
        CONTACT
    </Link>
    </div>

  </div>
)

export default Header