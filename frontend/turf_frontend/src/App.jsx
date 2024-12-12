import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'
import LocationAndSports from './pages/LocationAndSports';
import './index.css';

const App = () => {
  return (

    <Router>
          <div className="app">
            <Navbar />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/location" element={<LocationAndSports/>} />
            </Routes>
            <Footer />
          </div>
        </Router>
  );
};

export default App;