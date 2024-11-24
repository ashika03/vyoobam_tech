import React from "react";
import './result.css';

function Result() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Results - KSK Voting System</h1>
                    <p>Real-time results, percentage breakdown, and winning candidate details.</p>
                </div>
                <div className="section">
                    <h2>Real-time Results</h2>
                    <div className="chart-container">
                        <div
                            className="bar"
                            style={{ height: '60%' }}
                        >
                            Candidate A - 60%
                        </div>
                        <div
                            className="bar"
                            style={{ height: '25%' }}
                        >
                            Candidate B - 25%
                        </div>
                        <div
                            className="bar"
                            style={{ height: '15%' }}
                        >
                            Candidate C - 15%
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2>Percentage Breakdown & Number of Votes</h2>
                    <div className="result-details">
                        <p><strong>Candidate A:</strong> 60% - 300 votes</p>
                        <p><strong>Candidate B:</strong> 25% - 125 votes</p>
                        <p><strong>Candidate C:</strong> 15% - 75 votes</p>
                    </div>
                </div>
                <div className="section">
                    <h2>Winning Candidate</h2>
                    <p>The current leading candidate is:</p>
                    <p className="winning-candidate">Candidate A with 300 votes (60%)</p>
                </div>
                <div className="section">
                    <h2>Result Announcement Date</h2>
                    <p>The official results will be declared on December 1st.</p>
                </div>
            </div>
        </>
    );
}

export default Result;
