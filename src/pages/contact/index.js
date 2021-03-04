import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";

import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div>
      <Navbar />

      <div className="screen gallery-landing" style={{ height: "91vh" }}>
        <div
          className="screen-container column"
          style={{
            height: "91vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "-2vh",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "grid",
                // gridTemplateColumns: "repeat(auto-fit, minmax(2rem, 1fr))",
                gridTemplateRows: "repeat(auto-fit, minmax(2rem, 1fr))",
                gridGap: "1px",
                backgroundColor: "#8cc540",
              }}
            >
              <div className="contact-panel">
                <h2>
                  <i class="fas fa-envelope-open-text fa-3x"></i>
                </h2>
                <h5>coventryfreshhome@gmail.com</h5>
              </div>
              <div className="contact-panel">
                <h2>
                  <i class="fas fa-phone fa-3x"></i>
                </h2>
                <h5>+44 (0) 737 987 5115</h5>
              </div>
              <div className="contact-panel">
                <h2>
                  <i class="fab fa-instagram fa-3x"></i>
                </h2>
                <h5>coventryfreshhome</h5>
              </div>
              <div className="contact-panel">
                <h2>
                  <i class="fas fa-map-marker-alt fa-3x"></i>
                </h2>
                <h5>The Midlands</h5>
              </div>
            </div>
            <div style={{ display: "flex", flex: 4, flexDirection: "column" }}>
              <div className="contact-flex-container">
                <div
                  className="contact-column-1"
                  // style={{ padding: "10vh 0 10vh 10vh" }}
                >
                  <div
                    className="contact-column-1-1"
                    activeClass="active"
                    to="gallery-bathroom"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  ></div>
                  <div
                    className="contact-column-1-2"
                    activeClass="active"
                    to="gallery-bedroom"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  ></div>
                </div>
                <div
                  className="contact-column-2"
                  // style={{ padding: "10vh 10vh 10vh 0vh" }}
                >
                  <div
                    className="contact-column-2-1"
                    activeClass="active"
                    to="gallery-kitchen"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  ></div>
                  <div
                    className="contact-column-2-2"
                    activeClass="active"
                    to="gallery-gardening"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  ></div>
                </div>
              </div>
              <div className="contact-landing-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
