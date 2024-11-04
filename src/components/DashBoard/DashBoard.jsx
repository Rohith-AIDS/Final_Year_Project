import React, { useState } from 'react';
import './Dashboard.css';
import Chatbox from '../ChatBox/ChatBox';
const Dashboard = () => {
  const [isChatVisible, setChatVisible] = useState(false); // State to manage chat visibility

  const handleMockInterviewClick = () => {
    setChatVisible(true); // Show chatbox on mock interview click
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Your Interview Preparation Dashboard</h1>

      <div className="quick-access">
        <h2>Quick Access</h2>
        <div className="tiles-container">
          <div className="tile mock-interview" onClick={handleMockInterviewClick}>
            <h3>Mock Interview</h3>
            <i className="icon fas fa-question-circle"></i>
          </div>
          <div className="tile practice-questions">
            <h3>Practice Questions</h3>
            <i className="icon fas fa-question-circle"></i>
          </div>
          <div className="tile feedback-review">
            <h3>Feedback Review</h3>
            <i className="icon fas fa-comments"></i>
          </div>
          <div className="tile performance-analysis">
            <h3>Performance Analysis</h3>
            <i className="icon fas fa-chart-line"></i>
          </div>
          <div className="tile resources-guides">
            <h3>Resources/Guides</h3>
            <i className="icon fas fa-book"></i>
          </div>
        </div>
      </div>

      {/* Chatbox for mock interview */}
      {isChatVisible && <Chatbox />}
    </div>
  );
};

export default Dashboard;
