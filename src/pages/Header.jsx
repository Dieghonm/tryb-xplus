import React, { Component } from "react";
import '../css/header.css'
import logo from '../image/TryB-X+ header.png'
import trybe from '../image/Trybe Logo.svg'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img className="logoHeader" src={logo} alt='logo' />
        <img className="logotrybe" src={trybe} alt='trybe' />
      </header>
    )
  }
}

export default Header
