// LogoutAndAccountDeletion.jsx
import React, { useState } from 'react';
import "./logout.css"; // Ensure this CSS file exists in the same directory

const Logout = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const showConfirmation = (type) => {
    if (type === 'logout') {
      setShowLogoutConfirmation(true);
    } else if (type === 'delete') {
      setShowDeleteConfirmation(true);
    }
  };

  // const showConfirmation = (type) => {
  //   if (type === 'logout') {
  //     setShowLogoutConfirmation(true);
  //     console.log('Logout confirmation shown');
  //   } else if (type === 'delete') {
  //     setShowDeleteConfirmation(true);
  //     console.log('Delete confirmation shown');
  //   }
  // };
  
  // const closeConfirmation = (type) => {
  //   if (type === 'logout') {
  //     setShowLogoutConfirmation(false);
  //     console.log('Logout confirmation hidden');
  //   } else if (type === 'delete') {
  //     setShowDeleteConfirmation(false);
  //     console.log('Delete confirmation hidden');
  //   }
  // };
  

  const closeConfirmation = (type) => {
    if (type === 'logout') {
      setShowLogoutConfirmation(false);
    } else if (type === 'delete') {
      setShowDeleteConfirmation(false);
    }
  };

  const logoutUser = () => {
    alert('You have been logged out successfully.');
    closeConfirmation('logout');
    // Add actual logout logic here if needed
  };

  const deleteAccount = () => {
    alert('Your account has been deleted.');
    closeConfirmation('delete');
    // Add actual account deletion logic here if needed
  };

  return (
    <div className="container">
      <h1>Account Management</h1>

      {/* Logout Section */}
      <div className="menu-item" onClick={() => showConfirmation('logout')}>
        Logout
      </div>
      {showLogoutConfirmation && (
        <div id="logout-confirmation" className="confirmation-box">
          <p>Are you sure you want to logout?</p>
          <button className="confirm-button" onClick={logoutUser}>
            Yes, Logout
          </button>
          <button className="cancel-button" onClick={() => closeConfirmation('logout')}>
            Cancel
          </button>
        </div>
      )}

      {/* Delete Account Section */}
      <div className="menu-item" onClick={() => showConfirmation('delete')}>
        Delete Account
      </div>
      {showDeleteConfirmation && (
        <div id="delete-confirmation" className="confirmation-box">
          <p>Warning: Deleting your account will result in permanent data loss. Are you sure?</p>
          <button className="confirm-button" onClick={deleteAccount}>
            Yes, Delete
          </button>
          <button className="cancel-button" onClick={() => closeConfirmation('delete')}>
            Cancel
          </button>
        </div>
      )}
      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Security Tips</h2>
        <p>Make sure to back up important data before deleting your account. For any assistance, contact support.</p>
      </div>
    </div>
  );
};

export default Logout;
