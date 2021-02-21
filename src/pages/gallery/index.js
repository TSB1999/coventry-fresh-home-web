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
    <div className="home-container">
      <div className="screen gallery-landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="gallery-header">
            <h1>Our Work</h1>
          </div>
          <div className="gallery-grid-container">
            <div className="showcase-grid">
              <Link
                className="bathroom"
                activeClass="active"
                to="gallery-bathroom"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
              <Link
                className="bedroom"
                activeClass="active"
                to="gallery-bedroom"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
              <Link
                className="kitchen"
                activeClass="active"
                to="gallery-kitchen"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
              <Link
                className="garden"
                activeClass="active"
                to="gallery-gardening"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-gardening" id="gallery-gardening">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
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
        <div className="navbar-placeholder" />
        <div className="screen-container column">
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
              {/* <div className="gallery-item-wrapper five">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-bathroom" id="gallery-bathroom">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
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
              {/* <div className="gallery-item-wrapper three">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-bedroom" id="gallery-bedroom">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
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
              {/* <div className="gallery-item-wrapper three">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
