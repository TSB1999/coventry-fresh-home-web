import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import logo from "./images/400dpiLogo2.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="left">
        <div>
          <Link to="/" style={{ color: "#636c59" }}>
            {/* <img
              src={logo}
              style={{ width: "5.5rem", backgroundColor: "red" }}
            /> */}
            <i class="fas fa-home fa-3x size"></i>
          </Link>
          {/* <h4>home</h4> */}
        </div>
      </div>
      <div className="main">
        <div>
          <Link to="/bookings" style={{ color: "#636c59" }}>
            <i class="fas fa-calendar-week fa-3x size"></i>
          </Link>
          {/* <h4>enquiries</h4> */}
        </div>
        <div>
          <Link to="/gallery" style={{ color: "#636c59" }}>
            <i class="fas fa-images fa-3x size"></i>
            {/* <h4>gallery</h4> */}
          </Link>
        </div>
        <div>
          <Link to="/contact" style={{ color: "#636c59" }}>
            <i class="fas fa-info fa-3x size"></i>
            {/* <h4>info</h4> */}
          </Link>
        </div>
      </div>
      <div className="right">
        <div>
          <Link to="/payment-portal" style={{ color: "#636c59" }}>
            <i class="fas fa-donate fa-3x"></i>
            {/* <h4>donate</h4> */}
          </Link>
        </div>
      </div>
    </nav>
  );
}
