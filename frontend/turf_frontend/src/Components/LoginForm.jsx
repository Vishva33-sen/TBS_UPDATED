// // src/Components/LoginForm.jsx
// import React, { useState } from "react";
// import api from "../utils/api"; // Adjust import path if necessary
// import "./LoginForm.css";
//
// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//
//     try {
//       const response = await api.post("/home/login", { email, password });
//       console.log("success f 1");
//
//       setSuccess(response.data);
//       console.log("success page 1");
//       // Display success message
//       setError(""); // Clear any previous error messages
//       console.log("success f 2");
//
//       // Optionally redirect to the homepage or another page after successful login
//       window.location.href = "/home"; // Example redirection
//     } catch (err) {
//       setError(err.response?.data || "An error occurred");
//       setSuccess(""); // Clear success message if there's an error
//     }
//   };
//
//   return (
//     <div>
//       <h2>Login</h2>
//       {success && <p style={{ color: "green" }}>{success}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };
//
// export default LoginForm;



// src/Components/LoginForm.jsx
import React, { useState } from "react";
import api from "../utils/api"; // Adjust import path if necessary
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/home/login", { email, password });

      if (response.status === 200) { // Check if response is OK
        setSuccess(response.data); // Set success message
        setError(""); // Clear any previous error messages

        // Optionally redirect to the homepage or another page after successful login
        window.location.href = "/home"; // Example redirection
      } else {
        // Handle unexpected status codes
        setError("Unexpected response from the server.");
        setSuccess("");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password."); // Handle specific error case
      } else {
        setError(err.response?.data || "An error occurred."); // Generic error message
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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

export default LoginForm;
