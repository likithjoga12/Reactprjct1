import React from 'react'
import './main.css';
import logo from "./logo.jpg";


import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container pk">
    <NavLink className="navbar-brand" href="#">
      <img src= {logo}/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">AboutUs</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/offer">Offer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/book service">Book Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/testimonals">Testimonals</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header