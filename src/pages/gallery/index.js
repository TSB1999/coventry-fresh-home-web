import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

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

export default function index() {
  return (
    <div className="page">
      {/* Screen1 */}

      <div className="gallery-screen-wrapper" id="top-gallery">
        <div className="gallery-header-wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              marginLeft: "50px",
              marginRight: "50px",
              padding : '15px',
              height: "20vh",
              alignSelf: "center",
              borderRadius: "20px", 
              // border : '5px solid #979f8b'    
              boxShadow: '5px 5px #8cc540'
            }}
          >
            <h1>Come Check Out Our Work</h1>
            <h2>select one of the four options.</h2>
          </div>
          <div style={{ display: "flex", flex: 1, marginTop: "2vh" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "transparent",
              }}
            >
              <div className="bathrooms">
                <Link
                  activeClass="active"
                  to="bathrooms"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  style={{ flex: 1 }}
                >
                  <div
                    className="button-1"
                    style={{
                      margin: "10px 175px 10px -35px",
                      // backgroundColor: "white",
                      flex: 1,
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        display: "flex",
                        width: "80%",
                        color: "#3ab34a",
                        textShadow: "1px 1.4px #838383",
                        height: "100px",
                        fontWeight: "700",
                        fontSize: "27px",
                        backgroundColor: "white",
                        textTransform: "uppercase",
                        alignItems: "center",
                        border: "none",
                        // opacity : '0.7',
                        // boxShadow: "4px 4px #8cc540",
                      }}
                    >
                      Bathrooms
                    </button>
                  </div>
                </Link>
              </div>
              <div className="gardens" style={{ display: "flex" }}>
                <Link
                  activeClass="active"
                  to="gardens"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  style={{ flex: 1 }}
                >
                  <div
                    className="button-1"
                    style={{
                      margin: "10px 175px 10px -35px",
                      // backgroundColor: "white",
                      flex: 1,
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        display: "flex",
                        width: "80%",
                        height: "100px",
                        color: "#3ab34a",
                        textShadow: "1px 1.4px #838383",
                        fontWeight: "700",
                        fontSize: "27px",
                        backgroundColor: "white",
                        textTransform: "uppercase",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      Gardens
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "transparent",
              }}
            >
              <div className="kitchens">
                <Link
                  activeClass="active"
                  to="kitchens"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  style={{ flex: 1 }}
                >
                  <div
                    className="button-1"
                    style={{
                      margin: "10px 10px 10px 130px",
                      // backgroundColor: "white",
                      flex: 1,
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        display: "flex",
                        width: "80%",
                        color: "#3ab34a",
                        textShadow: "1px 1.4px #838383",
                        height: "100px",
                        fontWeight: "700",
                        fontSize: "27px",
                        backgroundColor: "white",
                        textTransform: "uppercase",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      Kitchens
                    </button>
                  </div>
                </Link>
              </div>
              <div
                className="gardens"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link
                  activeClass="active"
                  to="bedrooms"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  style={{ flex: 1 }}
                >
                  <div
                    className="button-1"
                    style={{
                      margin: "10px 10px 10px 130px",
                      // backgroundColor: "white",
                      flex: 1,
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        display: "flex",
                        width: "80%",
                        height: "100px",
                        color: "#3ab34a",
                        textShadow: "1px 1.4px #838383",
                        fontWeight: "700",
                        fontSize: "27px",
                        backgroundColor: "white",
                        textTransform: "uppercase",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      Bedrooms
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GARDENS */}
      <div className="gallery-screen-wrapper-2" id="gardens">
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

      {/* KITCHENS */}
      <div className="gallery-screen-wrapper-2" id="kitchens">
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

      {/* BATHROOMS */}
      <div className="gallery-screen-wrapper-2" id="bathrooms">
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
          <div className="gallery-item-wrapper three">
            <div
              className="item-img"
              // style={{ backgroundImage: `url(${portfolio3})` }}
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
              // style={{ backgroundImage: `url(${portfolio4})` }}
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
              // style={{ backgroundImage: `url(${portfolio5})` }}
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
              // style={{ backgroundImage: `url(${portfolio6})` }}
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
              // style={{ backgroundImage: `url(${portfolio7})` }}
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
              // style={{ backgroundImage: `url(${portfolio7})` }}
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

      {/* Screen 2 */}
      <div className="gallery-screen-wrapper-2" id="bedrooms">
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
  );
}
