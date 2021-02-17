import React from "react";

import { Link as ScrollLink } from "react-scroll";
import logo from "./images/editedlogo.jpeg";

// Styling
import "./styles.css";

// Navigation
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
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
            <img src={logo} style={{ width: "10rem" }} alt="logo" />
          </Link>
        </ScrollLink>
      </div>
      <div className="main-wrapper">
        <div class="nav-links">
          <div className="home-1">
            <div className="item">
              <div className="icon">
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
                  <Link class="nav-link" to="/bookings">
                    <i class="fas fa-home fa-2x size"></i>
                    {/* BOOKINGS */}
                  </Link>
                </ScrollLink>
              </div>
              <div className="nav-text">HOME</div>
            </div>
          </div>
          <div>
            <div className="item">
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
                    <i class="fas fa-calendar-week fa-2x size"></i>
                    {/* BOOKINGS */}
                  </Link>
                </ScrollLink>
              </div>
              <div className="nav-text">ENQUIRIES</div>
            </div>
          </div>
          <div>
            <div className="item">
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
                    <i class="fas fa-images fa-2x size"></i>

                    {/* GALLERY */}
                  </Link>
                </ScrollLink>
              </div>
              <div className="nav-text">GALLERY</div>
            </div>
          </div>
          <div className="info">
            <div className="item">
              <div className="icon">
                <Link class="nav-link" to="/contact">
                  <i class="fas fa-info fa-2x size"></i>
                  {/* CONTACT */}
                </Link>
              </div>
              <div className="nav-text">INFO</div>
            </div>
          </div>
        </div>
      </div>
      <div className="donation-wrapper">
        <i class="fas fa-donate fa-2x"></i>
      </div>
    </div>
  );
}
