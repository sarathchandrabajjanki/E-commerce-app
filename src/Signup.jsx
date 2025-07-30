import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [User, setUser] = useState("");

  async function HandleSignup() {
    if (!Name || !Email || !Password || !User) {
      alert("Please fill in all fields.");
    } else {
      const formData = {
        Myname: Name,
        MyEmail: Email,
        MyPassword: Password,
        MyUser: User,
      };

      const User1 = await fetch("https://68870e3d071f195ca97f0e43.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (User1.ok) {
        alert("Account created successfully!");
        navigate("/Login");
      } else {
        alert("Failed to create account.");
        setEmail("");
        setName("");
        setPassword("");
        setUser("");
      }
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>

        <label className="signup-label">Full Name</label>
        <input
          className="signup-input"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your full name"
        />

        <label className="signup-label">Email</label>
        <input
          className="signup-input"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <label className="signup-label">Password</label>
        <input
          className="signup-input"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Create a password"
        />

        <label className="signup-label">User ID</label>
        <input
          className="signup-input"
          value={User}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Choose a unique user ID"
        />

        <button className="signup-button" onClick={HandleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
