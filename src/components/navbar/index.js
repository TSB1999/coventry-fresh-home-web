import React from "react";
import "./styles.css";

import logo from "./images/400dpiLogo2.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="left">
        <div>
          <img src={logo} style={{ width: "6rem", backgroundColor: "red" }} />
          {/* <h4>home</h4> */}
        </div>
      </div>
      <div className="main">
        <div>
          <i class="fas fa-calendar-week fa-3x size"></i>
          <h4>enquiries</h4>
        </div>
        <div>
          <i class="fas fa-images fa-3x size"></i>
          <h4>gallery</h4>
        </div>
        <div>
          <i class="fas fa-info fa-3x size"></i>
          <h4>info</h4>
        </div>
      </div>
      <div className="right">
        <div>
          <i class="fas fa-donate fa-3x"></i>
          {/* <h4>donate</h4> */}
        </div>
      </div>
    </nav>
  );
}
