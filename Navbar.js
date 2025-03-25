import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link
import { FaCalendarAlt, FaBuilding, FaClipboardList, FaEnvelope, FaUser, FaBookOpen } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
import "./Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success shadow-sm">
      <Link className="navbar-brand text-white fw-bold" to="/"> RMK </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li className="nav-item mx-3"><Link className="nav-link text-white" to="/events"><FaCalendarAlt /> Events</Link></li>
          <li className="nav-item mx-3"><Link className="nav-link text-white" to="/facilities"><FaBuilding /> Facilities</Link></li>
          <li className="nav-item mx-3"><Link className="nav-link active text-warning" to="/hall-bookings"><FaClipboardList /> Hall Bookings</Link></li>
          <li className="nav-item mx-3"><Link className="nav-link text-white" to="/contact"><FaEnvelope /> Contact</Link></li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <button 
          className="btn btn-light fw-bold rounded-pill px-3 py-1 me-2 shadow-sm"
          style={{ background: "linear-gradient(45deg, #56ab2f, #a8e063)", color: "white", border: "none" }}
          onClick={() => setShowLogin(true)}
        >
          <FaUser /> Log In
        </button>
        
        <button 
          className="btn btn-warning fw-bold rounded-pill px-3 py-1 me-2 shadow-sm"
          style={{ background: "linear-gradient(45deg, #ff9966, #ff5e62)", color: "white", border: "none" }}
          onClick={() => setShowRegister(true)}
        >
          <FaUser /> Register
        </button>

        <Link className="nav-link text-white fw-bold ms-3" to="/user-manual">
          <FaBookOpen /> User Manual
        </Link>
      </div>

      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}
    </nav>
  );
};

export default Navbar;
