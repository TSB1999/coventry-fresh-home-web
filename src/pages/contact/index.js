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
              flexDirection: "column",
            }}
          >
            <div className="contact-flex-container">
              <div className="contact-column-1" style={{padding : '10vh 0 10vh 10vh'}}>
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
                >
                  
                    <h1
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#3ab34a",
                        textShadow: "0.2rem 0.2rem #000",
                        textTransform: "uppercase",
                        textAlign: "center",
                        writingMode: "vertical-rl",
                        padding: "1rem",
                      }}
                    >
                      {/* Bathrooms */}
                    </h1>
                </div>
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
                >
                  
                    <h1
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#3ab34a",
                        textShadow: "0.2rem 0.2rem #000",
                        textTransform: "uppercase",
                        textAlign: "center",
                        writingMode: "vertical-rl",
                        padding: "1rem",
                      }}
                    >
                      {/* Bedrooms */}
                    </h1>
                </div>
              </div>
              <div className="contact-column-2" style={{padding : '10vh 10vh 10vh 0vh'}}>
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
                >
                  
                    <h1
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#3ab34a",
                        textShadow: "0.2rem 0.2rem #000",
                        textTransform: "uppercase",
                        textAlign: "center",
                        writingMode: "vertical-rl",
                        padding: "1rem",
                      }}
                    >
                      {/* Kitchens */}
                    </h1>
                </div>
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
                >
                  
                    <h1
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#3ab34a",
                        textShadow: "0.2rem 0.2rem #000",
                        textTransform: "uppercase",
                        textAlign: "center",
                        writingMode: "vertical-rl",
                        padding: "1rem",
                      }}
                    >
                      {/* Gardens */}
                    </h1>
                </div>
              </div>
            </div>
            <div className="gallery-landing-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
