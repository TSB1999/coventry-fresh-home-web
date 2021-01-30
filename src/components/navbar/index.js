import React from "react";

import { Link as ScrollLink } from "react-scroll";
import logo from "./images/editedlogo.jpeg";

// Styling
import "./styles.css";

// Navigation
import { Link } from "react-router-dom";

export default function index() {
  return (
    <header>
      <div class="logo-container">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          // offset={50}
          duration={500}
          // delay={1000}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          <Link to="/">
            <img src={logo} style={{ width: "8rem" }} alt="logo" />
          </Link>
        </ScrollLink>
      </div>
      <nav>
        <ul class="nav-links">
          <li>
            <div className="item">
              <div style={{ flex: 1 }}>
                <div className="icon">
                  <ScrollLink
                    activeClass="active"
                    to="bookings"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={50}
                    duration={500}
                    // delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <Link class="nav-link" to="/bookings">
                      <i class="fas fa-calendar-week fa-2x"></i>
                      {/* BOOKINGS */}
                    </Link>
                  </ScrollLink>
                </div>
              </div>
              <div className="nav-text">ENQUIRIES</div>
            </div>
          </li>
          <li>
            <div className="item">
              <div style={{ flex: 1 }}>
                <div className="icon">
                  <ScrollLink
                    activeClass="active"
                    to="top-gallery"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={50}
                    duration={500}
                    // delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <Link class="nav-link" to="/gallery">
                      <i class="fas fa-images fa-2x"></i>

                      {/* GALLERY */}
                    </Link>
                  </ScrollLink>
                </div>
              </div>
              <div className="nav-text">GALLERY</div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="icon">
                <Link class="nav-link" to="/contact">
                  <i class="fas fa-info fa-2x"></i>
                  {/* CONTACT */}
                </Link>
              </div>
              <div className="nav-text">INFO</div>
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
