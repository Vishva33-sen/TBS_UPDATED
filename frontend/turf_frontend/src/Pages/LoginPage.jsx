import React, { useState } from "react";
import api from "../utils/api"; // Adjust import path if necessary
import "./LoginPage.css";
import {useNavigate} from "react-router-dom"; // Assuming CSS for styling is shared
import {useAuth} from "../utils/AuthContext.jsx";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password,  setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/home/login", { email, password });

      if (response.status === 200) {
        login();
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


  // const handleGoogleSuccess = async (credentialResponse) => {
  //   try {
  //     const response = await api.post("/oauth2/google", {
  //       token: credentialResponse.credential,
  //     });
  //     if (response.status === 200) {
  //       login();
  //       navigate("/location");
  //     }
  //   } catch (err) {
  //     setError("Google login failed. Please try again.");
  //   }
  // };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await api.post("/api/google-login", {
        credential: credentialResponse.credential,
      });

      if (response.status === 200) {
        console.log("Google login successful:", response.data);
        login();
        navigate("/location"); // Redirect on successful login
      } else {
        setError("Google login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during Google login:", err);
      setError(err.response?.data || "An error occurred during Google login.");
    }
  };


  const handleGoogleFailure = () => {
    setError("Google login failed. Please try again.");
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
          {/*<GoogleOAuthProvider clientId="895532369225-lck10dbbr2cbpmejso35716ivu4fp12h.apps.googleusercontent.com">*/}
          {/*  <GoogleLogin*/}
          {/*      onSuccess={handleGoogleSuccess}*/}
          {/*      onError={handleGoogleFailure}*/}
          {/*  />*/}
          {/*</GoogleOAuthProvider>*/}
          <GoogleOAuthProvider clientId="895532369225-lck10dbbr2cbpmejso35716ivu4fp12h.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("Google login successful", credentialResponse);
                  handleGoogleSuccess(credentialResponse);
                }}
                onError={() => {
                  console.error("Google login failed");
                  setError("Google login failed. Please try again.");
                }}
            />
          </GoogleOAuthProvider>
        </div>
  );
};

export default LoginPage;
