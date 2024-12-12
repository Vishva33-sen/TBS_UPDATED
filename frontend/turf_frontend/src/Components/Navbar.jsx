import React from 'react';
import './Navbar.css'; // Add a separate CSS file for this component

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">TurfBooking System</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
