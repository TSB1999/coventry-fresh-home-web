import React, { useEffect, useState, useContext } from "react";
import { FreshContext } from "../app-content/index";
import "./styles.css";

import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import logo from "./images/400dpiLogo2.jpeg";

export default function Navbar() {
  const { value, setValue } = useContext(FreshContext);

  const [theme, setTheme] = useState(1);

  return (
    <nav className="navbar-container" style={{ backgroundColor: theme }}>
      <div className="main">
        <div>
          <SLink
            activeClass="active"
            to="home-landing"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={true}
            style={{ width: "80%" }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              <i class="fas fa-home fa-2x"></i>
            </Link>
          </SLink>
          <h4 style={{ marginTop: "0.7rem", fontWeight: 900 }}>home</h4>
        </div>
        <div>
          <SLink
            activeClass="active"
            to="book-land"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={true}
            style={{ width: "80%" }}
          >
            <Link
              to="/bookings"
              style={{ color: "#fff" }}
              onClick={() => setTheme("#184739")}
            >
              <i class="fas fa-calendar-week fa-2x"></i>
            </Link>
          </SLink>
          <h4 style={{ marginTop: "0.7rem", fontWeight: 900 }}>bookings</h4>
        </div>
        <div>
          <Link to="/gallery" style={{ color: "#fff" }}>
            <i class="fas fa-images fa-2x"></i>
          </Link>
          <h4 style={{ marginTop: "0.7rem", fontWeight: 900 }}>gallery</h4>
        </div>
        <div>
          <Link to="/contact" style={{ color: "#fff" }}>
            <i class="fas fa-info-circle fa-2x"></i>
          </Link>
          <h4 style={{ marginTop: "0.7rem", fontWeight: 900 }}>info</h4>
        </div>
      </div>
    </nav>
  );
}
