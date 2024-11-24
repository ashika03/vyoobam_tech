import React from "react";
import './notification.css';
import { Link } from "react-router-dom";
function Notification()
{
    return <>
     <div class="container">
        <div class="header">
            <h1>Notifications</h1>
            <div>
                <button class="action-btn">
                    Search
                </button>
            </div>
        </div>
        <div class="notification">
            <h3>New Candidate Added</h3>
            <p>A new candidate has been added to the election.</p>
        </div>
        <div class="notification">
            <h3>Voting Period Open</h3>
            <p>The voting period is now open! Cast your vote.</p>
        </div>
        <div class="notification">
            <h3>Election Results Announced</h3>
            <p>The results of the election will be announced on December 1st.</p>
        </div>
        <div class="notification">
            <h3>Update on Election Process</h3>
            <p>Please check your email for updates regarding the election process.</p>
        </div>
        <div class="notification">
            <h3>Reminder: Voting Deadline Approaching</h3>
            <p>Make sure to cast your vote before the deadline on November 30th.</p>
        </div>
        <div class="notification">
            <h3>Meet the Candidates Event</h3>
            <p>Join us for an online event to meet the candidates on November 25th.</p>
        </div>
        <div class="notification">
            <h3>Election Guidelines Published</h3>
            <p>Review the updated election guidelines before voting.</p>
        </div>
        <div class="notification">
            <h3>Technical Support Available</h3>
            <p>Contact our support team if you encounter any issues with the voting platform.</p>
        </div>
    </div>
    </>
}
export default Notification;