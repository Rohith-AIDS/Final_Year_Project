import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Ensure styles are defined in this CSS file

// Import your local images
import aiQuestionsImage from '../assets/images/interview.jpg';
import feedbackImage from '../assets/images/3921053.jpg';
import successTrackingImage from '../assets/images/9812.jpg';
import expertResourcesImage from '../assets/images/5298.jpg';

function LandingPage({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="hero-section">
        <div className="title-container">
          <h1>The Future of Interview Preparation</h1>
        </div>
        <p>AI-powered tools for success in your next interview</p>
        <div className="button-group">
          <button className="cta-button" onClick={() => navigate('/dashboard')}>Get Started</button>
          <button className="signout-button" onClick={onLogout}>Sign Out</button>
        </div>
      </header>

      {/* Main Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature">
          <img src={aiQuestionsImage} alt="AI-Generated Questions" className="feature-icon" />
          <h3>AI-Generated Questions</h3>
          <p>Practice with AI-generated questions tailored to your field.</p>
        </div>
        <div className="feature">
          <img src={feedbackImage} alt="Personalized Feedback" className="feature-icon" />
          <h3>Personalized Feedback</h3>
          <p>Get insightful feedback to improve with every answer.</p>
        </div>
        <div className="feature">
          <img src={successTrackingImage} alt="Success Tracking" className="feature-icon" />
          <h3>Success Tracking</h3>
          <p>Track your progress and get closer to your dream job.</p>
        </div>
        <div className="feature">
          <img src={expertResourcesImage} alt="Expert Resources" className="feature-icon" />
          <h3>Expert Resources</h3>
          <p>Access curated resources to sharpen your skills.</p>
        </div>
      </section>

      {/* AI Interview Information Section */}
      <div className="ai-interview-info">
        <h2>AI-Powered Interview Insights</h2>
        <p>Enhance your preparation with advanced AI techniques.</p>
        <ul>
          <li>Automated interview simulations.</li>
          <li>Real-time feedback on your responses.</li>
          <li>Customizable question banks based on your field.</li>
          <li>Progress tracking to monitor your improvement.</li>
        </ul>
      </div>

      {/* Go to Dashboard Button */}
      <div className="dashboard-container">
        <button className="dashboard-button" onClick={() => navigate('/dashboard')}>
          Go to Dashboard
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Interview Prep Inc. All rights reserved.</p>
          <p>
            <a href="/terms" className="footer-link">Terms of Service</a> | 
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
