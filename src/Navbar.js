import React from 'react';
import {NavLink} from 'react-router-dom';
import imgsrc from "../src/gilltelecom.jpg";



const Navbar = () => {
    return(
      <>
  <header><img src={imgsrc} className="img-fluid" alt="imgres"/></header>
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col">  
        <nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/"></NavLink>
  <button className="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink  activeClassName='menu_active'
    
        className="nav-link" to="/">HOME<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/about">ABOUT US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active'className="nav-link" to="/services">SERVICES</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/clients">CLIENTS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/downloads">DOWNLOADS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active'className="nav-link" to="/contact">CONNACT US</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
</div>
</div>
</div>



        </>
      
    )
}
export default Navbar;
