import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="screen landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="landing-top">
            <h1>Domestic Cleaning and Gardening Services</h1>
          </div>
          <div className="landing-bottom" />
        </div>
      </div>
      <div className="screen gardening">
        <div className="navbar-placeholder" />
        <div className="screen-container row">
          <div className="landing-left">re</div>
          <div className="landing-right"></div>
        </div>
      </div>
      <div className="screen cleaning">
        <div className="navbar-placeholder" />
        <div className="screen-container"></div>
      </div>
    </div>
  );
}
