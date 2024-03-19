import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../Assets/argentBankLogo.png"
import "../Header/Header.css"

export default function Header() {
  return (
    <nav class="main-nav">
        <NavLink to="/" >   
        <div class="main-nav-logo">
      <img
        class="main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
      />
    </div>
    </NavLink>
    <div>
    <NavLink to="/login"  className="NavLinkSign"> 
      <div class="main-nav-item" >
        <i class="fa fa-user-circle"></i>
        <p class="SignIn"> Sign In</p>
      </div>
      </NavLink>
    </div>
  </nav>
  )
}
