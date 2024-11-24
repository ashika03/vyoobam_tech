import React, { useState } from 'react';
import './homepage.css';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


// function Homepage() {
//   const [menuActive, setMenuActive] = useState(false);  // Track the sidebar menu visibility

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);  // Toggle the sidebar visibility
//   };
function Homepage() {
  const [menuActive, setMenuActive] = useState(false);  // Track the sidebar menu visibility

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the sidebar visibility
    console.log("Menu active state:", !menuActive);
  };

  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <div className="menu-icon" onClick={toggleMenu}>
          ☰</div>
          <h1>KSK VOTING SYSTEM</h1>
          <div className="icon-container">
            <Link to ="/notific" className="icon" title="Notifications">🔔</Link>
            <Link to ="/profile" className="icon" title="Profile">👤</Link>
          </div>
        </header>

        {/* Sidebar Menu
        <div id="menu" className={`menu ${menuActive ? 'active' : ''}`}>
          <Link to="/election"> Election</Link>
          <Link to="/results">Results</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/support">Help & Support</Link>
        </div> */}
         {/* Sidebar Menu */}
         <div id="menu" className={`menu ${menuActive ? 'active' : ''}`}>
          <Link to="/election">Election</Link>
          <Link to="/candidate">candidate</Link>
          <Link to="/voting">voting</Link>
          <Link to="/result">Results</Link>
          <Link to="/setting">Settings</Link>
          <Link to="/helpsupp">Help & Support</Link>
        </div>

        {/* Main Content */}
        <main style={{ padding: '20px' }}>
          <h2>Hello USER!</h2>
          <p>
            This is the official voting platform for the Department of Computer Science and Engineering.
            This online voting system is a secure and streamlined platform specifically designed for the students
            of KSK College of Engineering and Technology. Built to support departmental elections, the system offers
            a simple and efficient way for students in the Department of Computer Science and Engineering to
            participate in voting for roles like president, secretary, and treasurer. With a user-friendly interface,
            students can log in securely, view candidate profiles, and cast their votes in each category with ease.
            This application also ensures vote integrity by securely storing data and providing a seamless experience
            from login to results viewing, empowering students to make informed choices in a modern and accessible format.
          </p>
        </main>
      </div>
    </>
  );
}

export default Homepage;