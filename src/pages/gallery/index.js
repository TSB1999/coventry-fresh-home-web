import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

// Components
import Navbar from "../../components/navbar";
import portfolio1 from "./images/instagram/IMG_1333.jpg";
import portfolio2 from "./images/instagram/IMG_1334.jpg";
import portfolio3 from "./images/instagram/IMG_1335.jpg";
import portfolio4 from "./images/instagram/IMG_1336.jpg";
import portfolio5 from "./images/instagram/IMG_1337.jpg";
import portfolio6 from "./images/instagram/IMG_1338.jpg";
import portfolio7 from "./images/instagram/IMG_1340.jpg";

export default function index() {
  return (
    <div className="page">
      {/* Screen1 */}

      <div className="gallery-screen-wrapper" id = "top-gallery">
        <div className="gallery-header-wrapper">
          <div className="gallery-header">
            <h1>Eiusmod nostrud mollit non laboris ea id nisi consectetur.</h1>
          </div>
          <div className="gallery-sub-header">
            <h2>
              Enim aliqua excepteur ea amet aliquip tempor nostrud et do quis
              cupidatat duis exercitation irure. Elit aliquip tempor ea sint
              aute est adipisicing tempor mollit sint qui deserunt ut nostrud.
              Ex ullamco sint voluptate cillum nisi eu veniam nisi consectetur
              proident laboris.{" "}
            </h2>
          </div>

          <div className="gallery-preview">
            <div className="gallery-item-wrapper">
              <div
                className="item-img"
                style={{ backgroundImage: `url(${portfolio1})` }}
              ></div>
              <div className="item-content-wrapper">
                <h4>
                  Aute labore ea cupidatat voluptate consectetur cillum tempor
                  cupidatat reprehenderit in minim.
                </h4>
              </div>
            </div>
            <div className="gallery-item-wrapper">
              <div
                className="item-img"
                style={{ backgroundImage: `url(${portfolio2})` }}
              ></div>
              <div className="item-content-wrapper">
                <h4>
                  Aute labore ea cupidatat voluptate consectetur cillum tempor
                  cupidatat reprehenderit in minim.
                </h4>
              </div>
            </div>
            <div className="gallery-item-wrapper">
              <div
                className="item-img"
                style={{ backgroundImage: `url(${portfolio3})` }}
              ></div>
              <div className="item-content-wrapper">
                <h4>
                  Aute labore ea cupidatat voluptate consectetur cillum tempor
                  cupidatat reprehenderit in minim.
                </h4>
              </div>
            </div>
            <div className="gallery-item-wrapper">
              <div
                className="item-img"
                style={{ backgroundImage: `url(${portfolio4})` }}
              ></div>
              <div className="item-content-wrapper">
                <h4>
                  Aute labore ea cupidatat voluptate consectetur cillum tempor
                  cupidatat reprehenderit in minim.
                </h4>
              </div>
            </div>
          </div>

          <div className="btn">
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <button>See more</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Screen 2 */}
      <div className="gallery-screen-wrapper" id="gallery">
        {/* <Navbar /> */}

        <div className="gallery-items-wrapper">
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio1})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio2})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio3})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio4})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio5})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio6})` }}
            ></div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim.
              </h4>
            </div>
          </div>
          <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio7})` }}
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
