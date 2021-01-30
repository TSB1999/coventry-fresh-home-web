import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

// Components
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

      <div className="gallery-screen-wrapper" id="top-gallery">
        <div className="gallery-header-wrapper">
          <div className="gallery-header-background">
            <div className="gallery-header">
              <h1>Call on Fresh Home for a Fresh Home</h1>
            </div>
            <div className="gallery-sub-header">
              <h3>
                At Fresh Home, our mission is to provide excellent sanitiary
                services to all our customers located in the Midlands. Our
                employees are dilligent, hard-working citizens of the UK, who
                share our core-values and are determined to provide you with the
                best service for your money.
              </h3>
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
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    width: "100%",
                    fontWeight: "700",
                    backgroundColor: "green",
                    fontSize: 13,
                    textTransform : "uppercase"
                  }}
                >
                  Enter Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 2 */}
      <div className="gallery-screen-wrapper-2" id="gallery">
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
