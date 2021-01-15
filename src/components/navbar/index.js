import React from "react";

// Styling
import "./styles.css";

// Navigation
import { Link } from "react-router-dom";

export default function index() {
  return (
    <header>
      <div class="logo-container">
        <Link to="/">
          <img src="./img/logo.svg" alt="logo" />
          <h4 class="logo">Fresh Home</h4>
        </Link>
      </div>
      <nav>
        <ul class="nav-links">
          <li>
            <div>
              <Link class="nav-link" to="/bookings">
                <i class="fas fa-calendar-week fa-3x"></i>
                {/* BOOKINGS */}
              </Link>
            </div>
            <div className = "nav-text">BOOKINGS</div>
          </li>
          <li>
            <div>
              <Link class="nav-link" to="/gallery">
                <i class="fas fa-images fa-3x"></i>

                {/* GALLERY */}
              </Link>
            </div>
            <div className = "nav-text">GALLERY</div>
          </li>
          <li>
            <div>
              <Link class="nav-link" to="/contact">
                <i class="fas fa-address-card fa-3x"></i>
                {/* CONTACT */}
              </Link>
            </div>
            <div className = "nav-text">CONTACT</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
