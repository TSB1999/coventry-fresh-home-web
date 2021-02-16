import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

// Kitchen
import showcase_k1 from "./images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg";
import kitchen1 from "./images/kitchens/IMG_1335.jpg";
import kitchen2 from "./images/kitchens/IMG_1336.jpg";
import kitchen3 from "./images/kitchens/IMG_1338.jpg";
import kitchen4 from "./images/kitchens/IMG_1340.jpg";

// Bathroom
import showcase_b1 from "./images/john-cameron-_RKgdOuNzY0-unsplash.jpg";
import showcase_b2 from "./images/pawel-czerwinski-FZAoIQ0vTqg-unsplash.jpg";
import showcase_b3 from "./images/shawn-ang-dB_usTnVQJE-unsplash.jpg";
import bathroom1 from "./images/bathrooms/IMG_1333.jpg";
import bathroom2 from "./images/bathrooms/IMG_1334.jpg";

// Bedroom
import showcase_bd1 from "./images/12565.jpg";
import showcase_bd2 from "./images/download.jpeg";
import showcase_bd3 from "./images/download (1).jpeg";
import bedroom1 from "./images/bedrooms/IMG_1337.jpg";
import bedroom2 from "./images/bedrooms/bedroom2.jpg";

// Garden
import showcase_g1 from "./images/hunt-han-4QdIiHPLnfI-unsplash.jpg";
import showcase_g2 from "./images/markus-spiske-sFydXGrt5OA-unsplash.jpg";
import showcase_g3 from "./images/mio-ito-DaGIjXNl5oA-unsplash.jpg";
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
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              flexDirection: "column",
              // backgroundColor: "grey",
              marginLeft: "60px",
              marginRight: "50px",
              padding: "6.5rem",
              height: "15vh",
              width: "20vw",
              borderRadius: "1rem",
              opacity: 1,
              // border: "4px solid #b6b6ad",
              boxShadow: "5px 5px #b6b6ad",
            }}
          >
            <h1 style={{ fontSize: "4.5rem" }}>GALLERY</h1>
            <h2
              style={{
                fontSize: "1rem",
                color: "grey",
                fontWeight: "bold",
                backgroundColor: "#b6b6ad",
                borderRadius: "0.5rem",
                padding: "0.4rem 0.5rem",
              }}
            >
              select an option
            </h2>
          </div>
          <div
            style={{ display: "flex", flex: 1, backgroundColor: "transparent" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
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
                      class="btn btn-primary bath-image"
                      style={{ border: "5px solid grey" }}
                    >
                      <h1
                        style={{
                          fontSize: "2.1rem",
                          // backgroundColor: "#fff",
                          borderRadius: "0.8rem",
                          padding: "7.9rem 5rem 0rem 0rem",
                          // opacity: 0.9,
                          color: "grey",
                          textShadow: "1.6px 1.6px #292929",
                          // paddingBottom: "3rem",
                        }}
                      >
                        Bathrooms
                      </h1>
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
                      class="btn btn-primary gard-image"
                      style={{ border: "5px solid grey" }}
                    >
                      <h1
                        style={{
                          fontSize: "2.1rem",
                          // backgroundColor: "#fff",
                          borderRadius: "0.8rem",
                          padding: "1rem 1.5rem",
                          // opacity: 0.9,
                          color: "grey",
                          textShadow: "1.6px 1.6px #292929",
                          padding: "3rem 4rem 0 0",
                        }}
                      >
                        Gardens
                      </h1>
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
                // backgroundColor: "red",
              }}
            >
              {/* <div className="kitchens">
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
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    className="button-1"
                    style={{
                      margin: "0 4rem",
                      // backgroundColor: "white",
                      flex: 1,
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary any-image"
                      style={{ border: "5px solid grey" }}
                    >
                      <h1
                        style={{
                          fontSize: "2.1rem",
                          // backgroundColor: "#3ab34a",
                          borderRadius: "0.8rem",
                          padding: "2.8rem",
                          // opacity: 0.7,
                          color: "#fff",
                        }}
                      >
                        ALL IMAGES
                      </h1>
                    </button>
                  </div>
                </Link>
              </div> */}
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  // backgroundColor: "red",
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
                        class="btn btn-primary kitch-image"
                        style={{ border: "5px solid grey" }}
                      >
                        <h1
                          style={{
                            fontSize: "2.5rem",
                            // backgroundColor: "#fff",
                            borderRadius: "0.8rem",
                            padding: "1rem 1.5rem",
                            // opacity: 0.9,
                            color: "grey",
                            textShadow: "1.6px 1.6px #292929",
                            padding: "0 0",
                          }}
                        >
                          Kitchens
                        </h1>
                      </button>
                    </div>
                  </Link>
                </div>
                <div
                  className="bedrooms"
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
                        class="btn btn-primary bed-image"
                        style={{ border: "5px solid grey" }}
                      >
                        <h1
                          style={{
                            fontSize: "2.1rem",
                            // backgroundColor: "#fff",
                            borderRadius: "0.8rem",
                            padding: "0 0 4rem 8.2rem",
                            opacity: 0.9,
                            color: "grey",
                            textShadow: "1.6px 1.6px #292929",
                          }}
                        >
                          Bedrooms
                        </h1>
                      </button>
                    </div>
                  </Link>
                </div>
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
