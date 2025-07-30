import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function HandleLogin() {
    const result = await fetch("https://68870e3d071f195ca97f0e43.mockapi.io/users");
    const response = await result.json();
    const data = response.find(
      (item) => item.MyEmail === Email && item.MyPassword === Password
    );

    if (data) {
      alert("Login successful!");
      navigate("/Home");
    } else {
      alert("Login failed. Please check your credentials.");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>
        <label className="login-label">Email</label>
        <input
          className="login-input"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
        />

        <label className="login-label">Password</label>
        <input
          className="login-input"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />

        <button className="login-button" onClick={HandleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
