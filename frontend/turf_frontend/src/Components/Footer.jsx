import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>&copy; 2024 TurfBooking System. All rights reserved.</p>
        <div className="social-icons">
          <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-right">
        <p>Address: No:27, 3rd Street, 5th Avenue, Chennai 600125</p>
        <p>Phone: +91 9881234567</p>
        <p>Email: tbs@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
