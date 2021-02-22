import React, { useEffect, useState, useContext } from "react";
import { FreshContext } from "../app-content/index";
import "./styles.css";

import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import logo from "./images/400dpiLogo2.jpeg";

export default function Navbar() {
  const { value, setValue } = useContext(FreshContext);

  const [theme, setTheme] = useState(1);

  useEffect(() => {
    console.log(window.location.href);
    switch (window.location.href) {
      case "http://localhost:3000/#home-landing":
        setTheme("#636c59");
        break;
      case "http://localhost:3000/bookings#book-land":
        setTheme("#184739");
        // case "http://localhost:3000/gallery":
        break;
      default:
      // code block
    }
  }, [theme]);

  return (
    <nav className="navbar-container" style={{ backgroundColor: theme }}>
      <div className="left">
        {/* <button onClick={doSumn}>sd</button> */}
        <div>
          <Link
            to="/"
            style={{ color: "#fff" }}
            onClick={() => setTheme("#636c59")}
          >
            {/* <img
              src={logo}
              style={{ width: "5.5rem", backgroundColor: "red" }}
            /> */}
            <i class="fas fa-home fa-2x"></i>
          </Link>
          {/* <h4>home</h4> */}
        </div>
      </div>
      <div className="main">
        <div>
          <Link
            to="/bookings"
            style={{ color: "#fff" }}
            onClick={() => setTheme("#184739")}
          >
            <i class="fas fa-calendar-week fa-2x"></i>
          </Link>
          {/* <h4>enquiries</h4> */}
        </div>
        <div>
          <Link
            to="/gallery"
            style={{ color: "#fff" }}
            onClick={() => setTheme(3)}
          >
            <i class="fas fa-images fa-2x"></i>
            {/* <h4>gallery</h4> */}
          </Link>
        </div>
        <div>
          <Link
            to="/payment-portal"
            style={{ color: "#fff" }}
            onClick={() => setTheme(4)}
          >
            <i class="fas fa-donate fa-2x"></i>
            {/* <h4>donate</h4> */}
          </Link>
        </div>
      </div>
      <div className="right">
        <div>
          <Link
            to="/contact"
            style={{ color: "#fff" }}
            onClick={() => setTheme(5)}
          >
            <i class="fas fa-info fa-2x"></i>
            {/* <h4>info</h4> */}
          </Link>
        </div>
      </div>
    </nav>
  );
}
