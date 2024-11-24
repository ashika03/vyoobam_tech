import React, { useState } from "react";
import './voting.css';

const Voting = () => {
  // State variables
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Candidate data for each role
  const candidatesData = {
    president: [
      {
        id: 1,
        name: "SHWETHA",
        description: "Experienced in leadership",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
      {
        id: 2,
        name: "RAM",
        description: "Strong vision for progress",
        image: "data:image/jpeg;base64,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",
      },
      {
        id: 3,
        name: "PREETHI",
        description: "Passionate about change",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
    ],
    secretary: [
      {
        id: 1,
        name: "NIVI",
        description: "Detail-oriented and organized",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
      {
        id: 2,
        name: "HARISH",
        description: "Efficient and reliable",
        image: "data:image/jpeg;base64,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",
      },
      {
        id: 3,
        name: "DIVYA",
        description: "Proven track record",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
    ],
    treasurer: [
      {
        id: 1,
        name: "AARSH",
        description: "Financially astute",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
      {
        id: 2,
        name: "MUKKUNDHEY",
        description: "Experienced in budgeting",
        image: "data:image/jpeg;base64,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",
      },
      {
        id: 3,
        name: "INDHU",
        description: "Strong financial management",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioczOkR1MNV6Ph-SGQQIZUIJumxr_Wixvw&s",
      },
    ],
  };

  // Handle vote button click
  const handleVoteClick = (role, candidate) => {
    setSelectedRole(role);
    setSelectedCandidate(candidate);
    setShowModal(true);  // Show confirmation modal
  };

  // Confirm vote
  const confirmVote = () => {
    setShowModal(false);
    setShowSuccessMessage(true); // Display success message

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // 3 seconds
  };

  // Cancel vote
  const cancelVote = () => {
    setShowModal(false); // Hide modal
  };

  return (
    <div className="container">
      <title>Voting system</title>
      <h1>VOTING SYSTEM</h1>

      {/* President Role */}
      <div className="role-section">
        <h2> PRESIDENT </h2>
        {candidatesData.president.map(candidate => (
          <div className="candidate" key={`president${candidate.id}`}>
            <img src={candidate.image} alt={`Candidate ${candidate.id}`} />
            <p>{candidate.name}</p>
            <p>{candidate.description}</p>
            <button
              className="vote-btn"
              onClick={() => handleVoteClick("president", candidate.id)}
              disabled={selectedRole === "president" && selectedCandidate && selectedCandidate !== candidate.id}
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      {/* Secretary Role */}
      <div className="role-section">
        <h2>Secretary</h2>
        {candidatesData.secretary.map(candidate => (
          <div className="candidate" key={`secretary${candidate.id}`}>
            <img src={candidate.image} alt={`Candidate ${candidate.id}`} />
            <p>{candidate.name}</p>
            <p>{candidate.description}</p>
            <button
              className="vote-btn"
              onClick={() => handleVoteClick("secretary", candidate.id)}
              disabled={selectedRole === "secretary" && selectedCandidate && selectedCandidate !== candidate.id}
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      {/* Treasurer Role */}
      <div className="role-section">
        <h2>Treasurer</h2>
        {candidatesData.treasurer.map(candidate => (
          <div className="candidate" key={`treasurer${candidate.id}`}>
            <img src={candidate.image} alt={`Candidate ${candidate.id}`} />
            <p>{candidate.name}</p>
            <p>{candidate.description}</p>
            <button
              className="vote-btn"
              onClick={() => handleVoteClick("treasurer", candidate.id)}
              disabled={selectedRole === "treasurer" && selectedCandidate && selectedCandidate !== candidate.id}
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to vote?</h3>
            <button onClick={confirmVote}>Yes</button>
            <button onClick={cancelVote}>No</button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && <div className="success-message">You have successfully voted!</div>}
    </div>
  );
};

export default Voting;
