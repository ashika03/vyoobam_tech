import React from "react";
import './splash.css';
import { Link } from "react-router-dom";

function Splash() {
  return (
    <>
      <div className="container">
        {/* Use React Router for navigation */}
        <Link to ="/signin" className="action-btn">Sign In / Sign Up</Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKP6lCr-5Iuf2nGlYC4Z-puO6KTYu4tn0HQ&s" alt="logo"/>
      </div>
      </>
  );
}

export default Splash;
