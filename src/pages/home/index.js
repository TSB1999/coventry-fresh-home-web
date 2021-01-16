import React from "react";
import "./styles.css";

import { Link } from "react-scroll";
import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div className="page">
      <div className="home-screen-wrapper" id="home">
        {/* <Navbar /> */}

        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <div className="header-home">
                <h1>
                  Professional Sanitary <br /> and Gardening Services
                </h1>
              </div>
              <div className="sub-header-home">
                <h3>GET YOUR SAME DAY QUOTE NOW!</h3>
              </div>
            </div>

            <div class="cta">
              <Link
                activeClass="active"
                to="cleaning"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                <button class="cta-select">CLEANING</button>
              </Link>
              <Link
                activeClass="active"
                to="gardening"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                <button class="cta-add">GARDENING</button>
              </Link>
            </div>
          </div>
          <div class="cover"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 2 */}

      <div className="home-screen-wrapper-2" id="gardening">
        <section class="presentation">
          <div class="introduction-2">
            <div class="intro-text">
              <div className="header-home">
                <h1>
                  Professional Sanitary <br /> and Gardening Services
                </h1>
              </div>
              <div className="sub-header-home">
                <h3>GET YOUR SAME DAY QUOTE NOW!</h3>
              </div>
            </div>

            <div class="cta">
              <button class="cta-select">CLEANING</button>
              <button class="cta-add">GARDENING</button>
            </div>
          </div>
          <div class="cover-2">
            {/* <form>
              <label for="fname">First name:</label>
              <br />
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="lname">Last name:</label>
              <br />
              <input type="text" id="lname" name="lname" />
            </form> */}
          </div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 3 */}

      <div className="home-screen-wrapper-3" id="cleaning">
        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <div className="header-home">
                <h1>
                  Professional Sanitary <br /> and Gardening Services
                </h1>
              </div>
              <div className="sub-header-home">
                <h3>GET YOUR SAME DAY QUOTE NOW!</h3>
              </div>
            </div>

            <div class="cta">
              <button class="cta-select">CLEANING</button>
              <button class="cta-add">GARDENING</button>
            </div>
          </div>
          <div class="cover"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>
    </div>
  );
}
