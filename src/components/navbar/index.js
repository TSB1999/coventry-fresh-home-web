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
            <Link class="nav-link" to="/bookings">
              BOOKINGS
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/gallery">
              GALLERY
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div class="cart">
        <img src="./img/cart.svg" alt="cart" />
      </div>
    </header>
  );
}
