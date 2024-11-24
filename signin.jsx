import React from "react";
import './signin.css';
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <div className="container">
        {/* Sign Up Form */}
        <div className="form-container">
          <h2>Sign Up</h2>
          <form className="signup-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="ID Verification" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Login Form */}
        <div className="form-container">
          <h2>Login</h2>
          <form className="login-form">
            <input type="email" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password or OTP" required />
            <Link to ="/home"> <button type="button">Login </button>
            </Link>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;