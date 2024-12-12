// src/Pages/LoginPage.jsx
import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import api from "../utils/api"; // Adjust import path if necessary

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/home/login", { email, password });
      console.log("success page 1");

      setSuccess(response.data);
      console.log("success page 1");
       // Display success message
      setError(""); // Clear any previous error messages
      console.log("success page 1");

      // Optionally redirect to the homepage or another page after successful login
      window.location.href = "/home"; // Example redirection
      console.log("successage 2");

    } catch (err) {
      setError(err.response?.data || "An error occurred");
      setSuccess(""); // Clear success message if there's an error
    }
  };

  return (

<div>
            <LoginForm/>
            </div>
  );
};

export default LoginPage;
