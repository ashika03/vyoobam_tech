import React from "react";
import './profile.css';
import { Link } from "react-router-dom";
function Profile()
{
    return<>
    <div class="profile-container">
        <div class="profile-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s" alt="Profile Picture" class="profile-picture"/>
            <h2>DIVYA</h2>
            <p>Contact: divyathirumeni2003@gmail.com | Phone: (123) 456-7890</p>
        </div>
        
        <div class="verification-status">
            <h3>Verification Status</h3>
            <p>Status: <span class="status verified">Verified</span></p>
        </div>
        
        <div class="edit-profile-section">
            <h3>Edit Profile</h3>
            <ul>
                <li>
                    <Link to ="/logout"> logout</Link>
                </li>
                <li>Update Password</li>
                <li>Change Security Settings</li>
                <li>Edit Contact Information</li>
            </ul>
        </div>
    </div>
    </>
}
export default Profile;