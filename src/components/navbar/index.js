import React from "react";

import logo from './images/400dpiLogo2.jpeg'

// Styling
import "./styles.css";

// Navigation
import { Link } from "react-router-dom";

export default function index() {
  return (
    <header>
      <div class="logo-container">
        <Link to="/">
          <img src = {logo} style = {{width : '80px'}} alt="logo" />
          {/* <h4 class="logo">Fresh Home</h4> */}
        </Link>
      </div>
      <nav>
        <ul class="nav-links">
          <li>
            <div className="item">
              <div style={{ flex: 1 }}>
                <div className="icon">
                  <Link class="nav-link" to="/bookings">
                    <i class="fas fa-calendar-week fa-2x"></i>
                    {/* BOOKINGS */}
                  </Link>
                </div>
              </div>
              <div className="nav-text">BOOKINGS</div>
            </div>
          </li>
          <li>
            <div className="item">
              <div style={{ flex: 1 }}>
                <div className="icon">
                  <Link class="nav-link" to="/gallery">
                    <i class="fas fa-images fa-2x"></i>

                    {/* GALLERY */}
                  </Link>
                </div>
              </div>
              <div className="nav-text">GALLERY</div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="icon">
                <Link class="nav-link" to="/contact">
                  <i class="fas fa-address-card fa-2x"></i>
                  {/* CONTACT */}
                </Link>
              </div>
              <div className="nav-text">CONTACT</div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="cart">
        {/* <img src="./img/cart.svg" alt="cart" /> */}
        <i class="fas fa-donate fa-2x"></i>
      </div>
    </header>
  );
}
