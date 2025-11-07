import React, { useState, useEffect } from "react";
import "./Navbar.css";
import login from "../assets/login.png";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array is correct for this use case

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    // Your JSX for the navbar goes here
    <nav className={`navbar ${isScrolled ? "navbar scrolled" : ""}`}>
      <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="compapany's logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link">
            Services
          </a>
        </li>
        <li className="navbar-item">
          <a href="#portfolio" className="navbar-link">
            Portfolio
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-cta">
        <button className="cta-button desktop-only">Get Started</button>
        <div className="login-logo mobile-only">
          <img src={login} alt="Login" />
        </div>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen} ?  'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen} ?  'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen} ?  'active' : ''}`}></span>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a href="#home" className="mobile-menu-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#about" className="mobile-menu-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#services"
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#portfolio"
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#contact" className="mobile-menu-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="mobile-menu-item">
            <button className="mobile-cta-button" onClick={closeMenu}>
              Get Started
            </button>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
