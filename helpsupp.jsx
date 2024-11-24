import React, { useState } from "react";
import "./helpsupp.css";

const HelpSupport = () => {
  // State for managing FAQ visibility
  const [visibleFAQ, setVisibleFAQ] = useState(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setVisibleFAQ(visibleFAQ === index ? null : index);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Help & Support - KSK Voting System</h1>
        <p>Your guide to using the Online Voting System for KSK College of Engineering and Technology.</p>
      </div>

      {/* FAQ Section */}
      <div className="section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        {[
          {
            question: "How does the voting process work?",
            answer: "Once logged in, navigate to the 'Election' page to view candidates and vote for each position.",
          },
          {
            question: "Is my vote secure?",
            answer: "Yes, the KSK Voting System uses secure protocols to ensure your vote remains confidential and tamper-proof.",
          },
          {
            question: "How do I manage my account details?",
            answer: "You can manage your account details under the 'Settings' section after logging in.",
          },
        ].map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 onClick={() => toggleFAQ(index)}>{index + 1}. {faq.question}</h3>
            {visibleFAQ === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Contact Support Section */}
      <div className="section">
        <h2>Contact Support</h2>
        <div className="contact-info">
          <p>If you need further assistance, feel free to reach out to our support team:</p>
          <p>Email: <a href="mailto:support@kskvotingsystem.edu">support@kskvotingsystem.edu</a></p>
          <p>Phone: <a href="tel:+911234567890">+91-123-456-7890</a></p>
        </div>
      </div>

      {/* Report an Issue Section */}
      <div className="section">
        <h2>Report an Issue</h2>
        <p>If you encounter any technical issues with the KSK Voting System, please click the button below to report it to our technical team.</p>
        <a href="report-issue.html" className="action-btn">Report an Issue</a>
      </div>

      {/* Terms of Service Section */}
      <div className="section">
        <h2>Terms of Service</h2>
        <div className="terms-info">
          <p>By using the KSK Voting System, you agree to abide by all terms and conditions governing its use. Unauthorized activities or abuse of the system may result in penalties as per college policies.</p>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="section">
        <h2>Privacy Policy</h2>
        <div className="privacy-info">
          <p>We are committed to protecting your privacy. The KSK Voting System ensures that all personal information remains confidential and is used solely for the purpose of facilitating the election process.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
