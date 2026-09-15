import React from "react";
import Logo from "../../assets/photos/logo.png";
import "./nav.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo-section">
        <img className="Logo" src={Logo} alt="Matias Logo" />
      </div>

      <ul className="menulist">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/work">WORK</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/testimonial">TESTIMONIAL</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="nav-buttons">
        <button className="talk-btn">Let's Talk </button>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;