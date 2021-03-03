import React from "react";
import "./styles.css";

import { Link } from "react-scroll";
import Navbar from "../../components/navbar";

// Kitchen
import kitchen1 from "./images/kitchens/IMG_1335.jpg";
import kitchen2 from "./images/kitchens/IMG_1336.jpg";
import kitchen3 from "./images/kitchens/IMG_1338.jpg";
import kitchen4 from "./images/kitchens/IMG_1340.jpg";

// Bathroom
import bathroom1 from "./images/bathrooms/IMG_1333.jpg";
import bathroom2 from "./images/bathrooms/IMG_1334.jpg";

// Bedroom
import bedroom1 from "./images/bedrooms/IMG_1337.jpg";
import bedroom2 from "./images/bedrooms/bedroom2.jpg";

// Garden
import garden1 from "./images/gardens/gardem-4.jpg";
import garden2 from "./images/gardens/garden-2.jpg";
import garden3 from "./images/gardens/garden-4.jpg";
import garden4 from "./images/gardens/garden-5.jpg";
import garden5 from "./images/gardens/garden-lawn.jpg";
import garden6 from "./images/gardens/patio.jpg";
import garden7 from "./images/gardens/patio2.jpg";
import garden8 from "./images/gardens/unnamed.jpg";

export default function Gallery() {
  return (
    <div className="home-container">
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
            <div className="gallery-flex-container">
              <div className="grid-column-1">
                <Link
                  className="grid-column-1-1"
                  activeClass="active"
                  to="gallery-bathroom"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#636c59",
                      flex: 1,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
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
                </Link>
                <Link
                  className="grid-column-1-2"
                  activeClass="active"
                  to="gallery-bedroom"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#636c59",
                      flex: 1,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
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
                </Link>
              </div>
              <div className="grid-column-2">
                <Link
                  className="grid-column-2-1"
                  activeClass="active"
                  to="gallery-kitchen"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#636c59",
                      flex: 1,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
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
                </Link>
                <Link
                  className="grid-column-2-2"
                  activeClass="active"
                  to="gallery-gardening"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#636c59",
                      flex: 1,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
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
                </Link>
              </div>
            </div>
            <div className="gallery-landing-footer"></div>
          </div>
        </div>
      </div>

      <div className="screen gallery-gardening" id="gallery-gardening">
        <div className="screen-container column" style = {{borderBottom: "0.15rem solid green"}}>
          <div className="gardening-header">
            <h2>Gardening</h2>
          </div>
          <div className="misc-container">
            <div className="gallery-items-wrapper">
              <div className="gallery-item-wrapper one">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden1})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper two">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden2})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper three">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden3})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper four">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden4})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper five">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden5})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper six">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden6})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper seven">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden7})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper eight">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${garden8})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-kitchen" id="gallery-kitchen">
        <div className="screen-container column" style = {{borderBottom: "0.15rem solid green"}}>
          <div className="gardening-header">
            <h2>Kitchens</h2>
          </div>
          <div className="misc-container">
            <div className="gallery-items-wrapper">
              <div className="gallery-item-wrapper one">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${kitchen1})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper two">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${kitchen2})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper three">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${kitchen3})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper four">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${kitchen4})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-bathroom" id="gallery-bathroom">
        <div className="screen-container column" style = {{borderBottom: "0.15rem solid green"}}>
          <div className="gardening-header">
            <h2>Bathrooms</h2>
          </div>
          <div className="misc-container">
            <div className="gallery-items-wrapper">
              <div className="gallery-item-wrapper one">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${bathroom1})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper two">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${bathroom2})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-bedroom" id="gallery-bedroom">
        <div className="screen-container column" style = {{borderBottom: "0.15rem solid green"}}>
          <div className="gardening-header">
            <h2>Bedrooms</h2>
          </div>
          <div className="misc-container">
            <div className="gallery-items-wrapper">
              <div className="gallery-item-wrapper one">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${bedroom1})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
              <div className="gallery-item-wrapper two">
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${bedroom2})` }}
                ></div>
                <div className="item-content-wrapper">
                  <h4>
                    Aute labore ea cupidatat voluptate consectetur cillum tempor
                    cupidatat reprehenderit in minim.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
