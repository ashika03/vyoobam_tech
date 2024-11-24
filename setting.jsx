import React, { useState } from "react";
import "./setting.css"; // Ensure this CSS file is in the same directory

const Setting = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'dark-theme' : ''}`}>
      <h1>Settings</h1>

      {/* Account Settings Section */}
      <div className="menu-item" onClick={() => toggleSection('account-settings')}>
        Account Settings
      </div>
      {activeSection === 'account-settings' && (
        <div className="menu-content">
          <ul>
            <li>Update Email</li>
            <li>Update Phone Number</li>
            <li>Update Password</li>
          </ul>
        </div>
      )}

      {/* Security Settings Section */}
      <div className="menu-item" onClick={() => toggleSection('security-settings')}>
        Security Settings
      </div>
      {activeSection === 'security-settings' && (
        <div className="menu-content">
          <ul>
            <li>Manage Two-Factor Authentication</li>
            <li>Biometric Login</li>
            <li>Other Security Preferences</li>
          </ul>
        </div>
      )}

      {/* Notification Preferences Section */}
      <div className="menu-item" onClick={() => toggleSection('notification-preferences')}>
        Notification Preferences
      </div>
      {activeSection === 'notification-preferences' && (
        <div className="menu-content">
          <ul>
            <li>Set Election Reminders</li>
            <li>Results Update Notifications</li>
            <li>General Notifications</li>
          </ul>
        </div>
      )}

      {/* Privacy Settings Section */}
      <div className="menu-item" onClick={() => toggleSection('privacy-settings')}>
        Privacy Settings
      </div>
      {activeSection === 'privacy-settings' && (
        <div className="menu-content">
          <ul>
            <li>Control Public Information</li>
          </ul>
        </div>
      )}

      {/* Language & Theme Section */}
      <div className="menu-item" onClick={() => toggleSection('language-theme')}>
        Language & Theme
      </div>
      {activeSection === 'language-theme' && (
        <div className="menu-content">
          <ul>
            <li>App Language</li>
            <li>
              <label className="toggle-label">
                Dark Mode
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider"></span>
              </label>
            </li>
          </ul>
        </div>
      )}

      {/* LinkedIn Accounts Section */}
      <div className="menu-item" onClick={() => toggleSection('linkedin-accounts')}>
        LinkedIn Accounts
      </div>
      {activeSection === 'linkedin-accounts' && (
        <div className="menu-content">
          <ul>
            <li>Link Social Accounts</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Setting;
