import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/DashBoard/DashBoard';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on app load
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true'); // Set authentication status in local storage
    setIsAuthenticated(true); // Set authenticated state to true
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear the authentication status
    setIsAuthenticated(false); // Update the authenticated state
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the HomePage, which includes a logout option */}
          <Route path="/" element={isAuthenticated ? <HomePage onLogout={handleLogout} /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
          {/* Route for the Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
