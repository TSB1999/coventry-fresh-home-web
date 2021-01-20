import React from "react";
import "./styles.css";
import logo from "./images/400dpiLogo.jpeg";

import Navbar from "../../components/navbar";
export default function index() {
  return (
    <div className="page">
      <div className="bookings-screen-wrapper" id="bookings">

        <div className="box0 box">
          <div className="icon-1">
            {/* <img src={logo} style={{ width: "200px" }} alt="logo" /> */}
          </div>

          <div className="title">
            <h5>Custom</h5>
          </div>

          <div className="button-section">
            <div className="button">
              <button>Pay</button>
            </div>
            <div className="button">
              <button>Info</button>
            </div>
          </div>
        </div>

        <div className="box1 box">
          <div className="icon-1">
            {/* <img src={logo} style={{ width: "200px" }} alt="logo" /> */}
          </div>

          <div className="title">
            <h5>STANDARD</h5>
          </div>

          <div className="button-section">
            <div className="button">
              <button>Pay</button>
            </div>
            <div className="button">
              <button>Info</button>
            </div>
          </div>
        </div>

        <div className="box2 box">
          <div className="icon-1">
            {/* <img src={logo} style={{ width: "200px" }} alt="logo" /> */}
          </div>

          <div className="title">
            <h5>Economy</h5>
          </div>

          <div className="button-section">
            <div className="button">
              <button>Pay</button>
            </div>
            <div className="button">
              <button>Info</button>
            </div>
          </div>
        </div>

        <div className="box3 box">
          <div className="icon-1">
            {/* <img src={logo} style={{ width: "200px" }} alt="logo" /> */}
          </div>

          <div className="title">
            <h5>DELUXE</h5>
          </div>

          <div className="button-section">
            <div className="button">
              <button>Pay</button>
            </div>
            <div className="button">
              <button>Info</button>
            </div>
          </div>
        </div>

        <div className="box4 box">
          <div className="icon-1">
            {/* <img src={logo} style={{ width: "200px" }} alt="logo" /> */}
          </div>

          <div className="title">
            <h5>PREMIUM</h5>
          </div>

          <div className="button-section">
            <div className="button">
              <button>Pay</button>
            </div>
            <div className="button">
              <button>Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
