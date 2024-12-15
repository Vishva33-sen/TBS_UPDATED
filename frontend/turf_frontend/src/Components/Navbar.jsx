import React, { useState } from "react";
import './Navbar.css';
import {useAuth} from "../utils/AuthContext.jsx";
import {useNavigate} from "react-router-dom"; // Add a separate CSS file for this component

const Navbar = () => {
    const email = localStorage.getItem("email");
    const firstLetter = email ? email.charAt(0).toUpperCase() : ""; // Get the first letter of the email
    const { isAuthenticated, logout, login } = useAuth();
    const navigate = useNavigate();

    const loginUser = () =>{
        login()
        navigate("/login")
    }
    const logoutUser = () =>{
        logout()
        navigate("/home")
    }



    return (
        <div className="navbar">
            <div className="logo">TurfBooking System</div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                {!isAuthenticated ? (
                    <>
                        <li><a onClick={() => loginUser()} style={{ cursor: "pointer" }}>Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </>
                ) : (
                    <li><a onClick={() => logoutUser()} style={{ cursor: "pointer" }}>Logout</a></li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
