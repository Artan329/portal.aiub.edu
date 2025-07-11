import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import GradeReport from './components/GradeReport';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (username: string, password: string) => {
    if (username === '23-54221-3@student.aiub.edu' && password === 'Tan@73748433fz9') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} onLogout={handleLogout} />}
      {currentPage === 'grades' && <GradeReport onNavigate={setCurrentPage} onLogout={handleLogout} />}
    </div>
  );
}

export default App;