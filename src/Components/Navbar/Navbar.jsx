import React from 'react'
import './Navbar.css';
import logo from '../../assets/Squaircle.svg';

const Navbar = () => {
  return (
    <nav className='container'>
    <img src={logo} alt="" className='clsLogo' />
    <ul>
      <li><a href="https://squaircle.co/work/">Home</a></li>
      <li><a href="https://squaircle.co/work/">About Us</a></li>
      <li>Service</li>
      <li><button className='clsNavbtn'>Contact Us</button></li>
    </ul>
  </nav>
  )
}

export default Navbar
