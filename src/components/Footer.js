
import React from 'react';
import linkedin from '../assets/linkdn.png'
import  Youtube from '../assets/Youtube.png'
import Instagram from '../assets/Instagram.png'

import { Link } from 'react-router-dom'

const Footer = ({topScroll}) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">CodeStars</h2>
          <p className="footer-description">
            CodeStars, the official programming club of DJ Sanghvi College of Engineering, 
            encourages students to explore real-time applications of competitive programming (CP).
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-subtitle">Address</h3>
          <p className="footer-text">
            Dwarkadas J. Sanghvi College of Engineering,<br />
            Vile Parle West, Mumbai-400056
          </p>
          <h3 className="footer-subtitle">Contact</h3>
          <p className="footer-text">info.codestars@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-subtitle">Links</h3>
          <ul className="footer-links">
          <li onClick={topScroll}>
              <Link className="footer-link" to="/">Home</Link>
            </li>
            <li onClick={topScroll}>
              <Link className="footer-link" to="event">Events</Link>
            </li>
            <li onClick={topScroll}>
              <Link className="footer-link" to="team">Team</Link>
            </li>
            <li onClick={topScroll}>
              <Link className="footer-link" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
             <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon">
             <img src={Instagram} alt="LinkedIn" /></a>
            <a href="#" className="social-icon">
             <img src={Youtube} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;