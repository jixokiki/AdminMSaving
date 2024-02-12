import React, { useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../component/Home';
import About from '../component//About';
import Contact from '../component/ContactForm';
import SignUp from '../component/SignUp';
// import Login from './Login';

const Navbar2 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Callback untuk menangani registrasi pengguna
  const handleRegistration = (data) => {
    setUserData(data);
    setLoggedIn(true);
  };

  // Callback untuk menangani login pengguna
  const handleLogin = (data) => {
    // Anda dapat menambahkan logika login di sini (misalnya, memverifikasi data)
    // Contoh sederhana di bawah ini hanya menyetel status login ke true.
    setLoggedIn(true);
    setUserData(data);
  };

  // Callback untuk logout
  const handleLogout = () => {
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {!loggedIn && (
            <>
              <li>
                <NavLink to="/signup" activeClassName="active">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
            </>
          )}
          {loggedIn && (
            <>
              <li>
                <NavLink to="/profile" activeClassName="active">
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={loggedIn ? <Navigate to="/" /> : <SignUp onRegistration={handleRegistration} />}
        />
        {/* <Route
          path="/login"
          element={loggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
        /> */}
        <Route
          path="/profile"
          element={loggedIn ? <Profile userData={userData} /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

const Profile = ({ userData }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {userData && userData.username}!</p>
      {/* Tambahkan konten lainnya sesuai kebutuhan */}
    </div>
  );
};

export default Navbar2;
