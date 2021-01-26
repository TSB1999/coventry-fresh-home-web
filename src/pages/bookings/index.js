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
  const [customProduct, setCustomProduct] = React.useState({
    name: "Custom Package",
    price: 20,
    quantity: 1,
  });
  const [premiumProduct, setPremiumProduct] = React.useState({
    name: "Premium Package",
    price: 20,
    quantity: 1,
  });
  const [deluxeProduct, setDeluxeProduct] = React.useState({
    name: "Deluxe Package",
    price: 20,
    quantity: 1,
  });
  const [economyProduct, setEconomyProduct] = React.useState({
    name: "Economy Package",
    price: 20,
    quantity: 1,
  });
  const [standardProduct, setStandardProduct] = React.useState({
    name: "Standard Package",
    price: 20,
    quantity: 1,
  });

  async function handleToken(token, product) {
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
                <h5>discover.</h5>
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
                <h5>discover.</h5>
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
                <h5 style={{ marginTop: "8px" }}>discover.</h5>
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
                <h5>discover.</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Screen 2 */}
      <div className="custom-screen-wrapper-2" id="custom">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">
              <div className="payment-title">custom package</div>
              <div className="payment-table">table</div>
              <div className="payment">
                <div className="payment-section-1"></div>
                <div className="payment-section-2">
                  <div
                    className="subtract circle"
                    onClick={() =>
                      setCustomProduct({
                        name: "Custom Package",
                        price: 20,
                        quantity: customProduct.quantity - 1,
                      })
                    }
                  >
                    <button>-1</button>
                  </div>
                  <div className="quantity circle">
                    {customProduct.quantity}
                  </div>
                  <div
                    className="add circle"
                    onClick={() =>
                      setCustomProduct({
                        name: "Custom Package",
                        price: 20,
                        quantity: customProduct.quantity + 1,
                      })
                    }
                  >
                    <button>+1</button>
                  </div>
                </div>
                <div className="payment-section-3">
                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    token={(token) => handleToken(token, customProduct)}
                    billingAddress
                    shippingAddress
                    amount={customProduct.price * customProduct.quantity * 100}
                    name={customProduct.name}
                  />
                </div>
              </div>
            </div>
            <div className="payment-button-wrapper"></div>
          </div>
        </div>
      </div>
      {/* Screen 3 */}
      <div className="premium-screen-wrapper-3" id="premium">
        <div className="right">
          <div className="description">
            <div className="payment-info">
              <div className="payment-title">premium package</div>
              <div className="payment-table">table</div>
              <div className="payment">
                <div className="payment-section-1"></div>
                <div className="payment-section-2">
                  <div
                    className="subtract circle"
                    onClick={() =>
                      setPremiumProduct({
                        name: "Premium Package",
                        price: 20,
                        quantity: premiumProduct.quantity - 1,
                      })
                    }
                  >
                    <button>-1</button>
                  </div>
                  <div className="quantity circle">
                    {premiumProduct.quantity}
                  </div>
                  <div
                    className="add circle"
                    onClick={() =>
                      setPremiumProduct({
                        name: "Premium Package",
                        price: 20,
                        quantity: premiumProduct.quantity + 1,
                      })
                    }
                  >
                    <button>+1</button>
                  </div>
                </div>
                <div className="payment-section-3">
                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    token={(token) => handleToken(token, customProduct)}
                    billingAddress
                    shippingAddress
                    amount={
                      premiumProduct.price * premiumProduct.quantity * 100
                    }
                    name={premiumProduct.name}
                  />
                </div>
              </div>
            </div>
            <div className="payment-button-wrapper"></div>
          </div>
        </div>
        <div className="left">
          <div className="description">dre</div>
        </div>
      </div>
      {/* Screen 4 */}
      <div className="deluxe-screen-wrapper-4" id="deluxe">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">
              <div className="payment-title">deluxe package</div>
              <div className="payment-table">table</div>
              <div className="payment">
                <div className="payment-section-1"></div>
                <div className="payment-section-2">
                  <div
                    className="subtract circle"
                    onClick={() =>
                      setDeluxeProduct({
                        name: "Deluxe Package",
                        price: 20,
                        quantity: deluxeProduct.quantity - 1,
                      })
                    }
                  >
                    <button>-1</button>
                  </div>
                  <div className="quantity circle">
                    {deluxeProduct.quantity}
                  </div>
                  <div
                    className="add circle"
                    onClick={() =>
                      setDeluxeProduct({
                        name: "Deluxe Package",
                        price: 20,
                        quantity: deluxeProduct.quantity + 1,
                      })
                    }
                  >
                    <button>+1</button>
                  </div>
                </div>
                <div className="payment-section-3">
                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    token={(token) => handleToken(token, deluxeProduct)}
                    billingAddress
                    shippingAddress
                    amount={deluxeProduct.price * deluxeProduct.quantity * 100}
                    name={deluxeProduct.name}
                  />
                </div>
              </div>
            </div>
            <div className="payment-button-wrapper">f</div>
          </div>
        </div>
      </div>
      Ì{/* Screen 5 */}
      <div className="economy-screen-wrapper-5" id="economy">
        <div className="right">
          <div className="description">
            <div className="payment-info">
              <div className="payment-title">economy package</div>
              <div className="payment-table">table</div>
              <div className="payment">
                <div className="payment-section-1"></div>
                <div className="payment-section-2">
                  <div
                    className="subtract circle"
                    onClick={() =>
                      setEconomyProduct({
                        name: "Economy Package",
                        price: 20,
                        quantity: economyProduct.quantity - 1,
                      })
                    }
                  >
                    <button>-1</button>
                  </div>
                  <div className="quantity circle">
                    {economyProduct.quantity}
                  </div>
                  <div
                    className="add circle"
                    onClick={() =>
                      setEconomyProduct({
                        name: "Economy Package",
                        price: 20,
                        quantity: economyProduct.quantity + 1,
                      })
                    }
                  >
                    <button>+1</button>
                  </div>
                </div>
                <div className="payment-section-3">
                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    token={(token) => handleToken(token, economyProduct)}
                    billingAddress
                    shippingAddress
                    amount={
                      economyProduct.price * economyProduct.quantity * 100
                    }
                    name={economyProduct.name}
                  />
                </div>
              </div>
            </div>
            <div className="payment-button-wrapper"></div>
          </div>
        </div>
        <div className="left">
          <div className="description">dre</div>
        </div>
      </div>
      {/* Screen 6 */}
      <div className="standard-screen-wrapper-6" id="standard">
        <div className="left">
          <div className="description">dre</div>
        </div>
        <div className="right">
          <div className="description">
            <div className="payment-info">
              <div className="payment-title">standard package</div>
              <div className="payment-table">table</div>
              <div className="payment">
                <div className="payment-section-1"></div>
                <div className="payment-section-2">
                  <div
                    className="subtract circle"
                    onClick={() =>
                      setStandardProduct({
                        name: "Standard Package",
                        price: 20,
                        quantity: standardProduct.quantity - 1,
                      })
                    }
                  >
                    <button>-1</button>
                  </div>
                  <div className="quantity circle">
                    {standardProduct.quantity}
                  </div>
                  <div
                    className="add circle"
                    onClick={() =>
                      setPremiumProduct({
                        name: "Premium Package",
                        price: 20,
                        quantity: standardProduct.quantity + 1,
                      })
                    }
                  >
                    <button>+1</button>
                  </div>
                </div>
                <div className="payment-section-3">
                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    token={(token) => handleToken(token, standardProduct)}
                    billingAddress
                    shippingAddress
                    amount={
                      standardProduct.price * standardProduct.quantity * 100
                    }
                    name={setStandardProduct.name}
                  />
                </div>
              </div>
            </div>
            <div className="payment-button-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
