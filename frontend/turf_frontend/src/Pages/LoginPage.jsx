
import React, { useState } from "react";
import api from "../utils/api"; // Adjust import path if necessary
import "./LoginPage.css"; // Assuming CSS for styling is shared


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/home/login", { email, password });

      if (response.status === 200) {
        setSuccess(response.data); // Set success message
        setError(""); // Clear any previous error messages
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        // Redirect to a different page after successful login
        window.location.href = "/location"; // Example redirection
      } else {
        setError("Unexpected response from the server."); // Handle unexpected status
        setSuccess("");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password."); // Handle 401 Unauthorized
      } else {
        setError(err.response?.data || "An error occurred."); // Generic error handling
      }
      setSuccess(""); // Clear success message if there's an error
    }
  };

  return (
        <div>
          <h2>Login</h2>
          {success && <p style={{ color: "green" }}>{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
          </form>
        </div>
  );
};

export default LoginPage;
