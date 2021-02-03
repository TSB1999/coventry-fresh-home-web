import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";

import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div className="contact-screen-wrapper">
      <div className="contact-items-wrapper">
        <div className="contact-container">
          <div className="contact-header">
            {/* <h2>Get in Contact...</h2> */}
          </div>
          <div className="contact-description">

            <div className="email box">
              <div className="icon">
                <i class="fas fa-envelope-open-text fa-2x"></i>
              </div>
              <div className="content">
                <h5>coventryfreshhome@gmail.com</h5>
              </div>
            </div>
            <div className="insta box">
              <div className="icon">
                <i class="fab fa-instagram fa-2x"></i>
              </div>
              <div className="content">
                <h5>coventryfreshhome</h5>
              </div>
            </div>
            <div className="phone box">
              <div className="icon">
                <i class="fas fa-phone fa-2x"></i>
              </div>
              <div className="content">
                <h5>+44 (0) 737 987 5115</h5>
              </div>
            </div>
            <div className="phone box">
              <div className="icon">
                <i class="fas fa-map-marker-alt fa-2x"></i>
              </div>
              <div className="content">
                <h5>Coventry</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
