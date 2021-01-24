import React from "react";
import "./styles.css";
import logo from "./images/400dpiLogo.jpeg";

import Navbar from "../../components/navbar";
import { Link } from "react-scroll";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Index() {
  const [product] = React.useState({
    name: "Standard",
    price: 20,
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://j3m2f.sse.codesandbox.io/checkout",
      {
        token,
        product,
      }
    );
    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="page">
      {/* Screen 1 */}
      <div className="bookings-screen-wrapper" id="bookings">
        <div className="box0 box">
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
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <h5>discover. </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="box1 box">
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
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <h5>discover. </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="box2 box">
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
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <h5>discover. </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="box3 box">
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
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <h5 style = {{marginTop : '8px'}}>discover. </h5>
              </div>
            </Link>
          </div>
        </div>

        <div className="box4 box">
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
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className="button">
                <h5>discover. </h5>
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
      <div className="bookings-screen-wrapper-3" id="premium">
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
      <div className="bookings-screen-wrapper-4" id="deluxe">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">f</div>
            <div className="payment-button-wrapper">
              <button>Pay £20</button>
              <StripeCheckout
                stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={product.price * 100}
                name={product.name}
              />
            </div>
          </div>
        </div>
      </div>
      Ì{/* Screen 5 */}
      <div className="bookings-screen-wrapper-5" id="economy">
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
      <div className="bookings-screen-wrapper-6" id="standard">
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
