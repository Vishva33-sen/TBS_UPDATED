import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'
import LocationAndSports from './pages/LocationAndSports';
import {AuthProvider} from "./utils/AuthContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const App = () => {
  return (

      <Router>
          <div className="app">
              <AuthProvider>

                  <Navbar />
                  <Routes>
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/location" element={
                          <ProtectedRoute>
                              <LocationAndSports/>
                          </ProtectedRoute> }/>
                  </Routes>
                  <Footer />

              </AuthProvider>
          </div>
      </Router>
  );
};

export default App;