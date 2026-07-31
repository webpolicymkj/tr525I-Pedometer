import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';


import bannerApp from './assets/app/bannerApp.png';


import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Step Tracker: Walking App" className="logo-img" />
                <span className="studio-name">Step Tracker: Walking App</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Step Tracker: Walking App</h2>
            <p className="about-text">Step Tracker: Walking App is a simple, fast, and easy-to-use app for counting your daily steps. It uses your device's built-in step sensor to track how far you walk, how long you were active, and roughly how many calories you burned, then sets it all against a daily goal you choose. You can also record a walk to see its route on a map. Your step history and routes are kept on your own device, and the app runs quietly in the background without draining your battery.
            </p>
          </div>
          <div className="about-img-container">
            <img src={bannerApp} alt="Step Tracker: Walking App" className="about-img" />
          </div>
        </div>
      </section>

    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Step Tracker: Walking App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
