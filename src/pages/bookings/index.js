import React from "react";
import "./styles.css";
import logo from "./images/400dpiLogo.jpeg";

import Navbar from "../../components/navbar";
import { Link } from "react-scroll";

export default function index() {
  return (
    <div className="page">
      {/* Screen 1 */}
      <div className="bookings-screen-wrapper" id="bookings">
        <div className="box0 box">
          {/* <div className="icon-1">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div> */}

          <div className="title">
            <h5>Custom</h5>
          </div>

          <div className="button-section">
            <Link
              activeClass="active"
              to="custom"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <button>See More</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="box1 box">
          {/* <div className="icon-1">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div> */}

          <div className="title">
            <h5>STANDARD</h5>
          </div>

          <div className="button-section">
            <Link
              activeClass="active"
              to="standard"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <button>See More</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="box2 box">
          {/* <div className="icon-1">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div> */}

          <div className="title">
            <h5>Economy</h5>
          </div>

          <div className="button-section">
            <Link
              activeClass="active"
              to="economy"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <button>See More</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="box3 box">
          {/* <div className="icon-1">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div> */}

          <div className="title">
            <h5>DELUXE</h5>
          </div>

          <div className="button-section">
            <Link
              activeClass="active"
              to="deluxe"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <button>See More</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="box4 box">
          {/* <div className="icon-1">
            <img src={logo} style={{ width: "200px" }} alt="logo" />
          </div> */}

          <div className="title">
            <h5>PREMIUM</h5>
          </div>

          <div className="button-section">
            <Link
              activeClass="active"
              to="premium"
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <button>See More</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Screen 2 */}
      <div className="bookings-screen-wrapper-2" id="custom">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
      </div>

      {/* Screen 3 */}
      <div className="bookings-screen-wrapper-2" id="premium">
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
        <div className="left">
          <div className="description">dre</div>
        </div>
      </div>

      {/* Screen 4 */}
      <div className="bookings-screen-wrapper-2" id="deluxe">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
      </div>

      {/* Screen 5 */}
      <div className="bookings-screen-wrapper-2" id="economy">
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
        <div className="left">
          <div className="description">dre</div>
        </div>
      </div>

      {/* Screen 6 */}
      <div className="bookings-screen-wrapper-2" id="standard">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
      </div>
    </div>
  );
}
