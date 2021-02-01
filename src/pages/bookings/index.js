import React, { useEffect } from "react";
import "./styles.css";

import { Link } from "react-scroll";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import image from "./images/clean.jpeg";
import image1 from "./images/garden.jpeg";
import small from "./images/small-eclipse.svg";
import medium from "./images/mid-eclipse.svg";
import large from "./images/big-eclipse.svg";

toast.configure();

export default function Index() {
  const [loading, setLoading] = React.useState(false);

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
    setLoading(true);
    console.log("start");
    const response = await axios.post(
      "https://j3m2f.sse.codesandbox.io/checkout",
      {
        token,
        product,
      }
    );
    const { status } = response.data;
    if (status === "success") {
      setLoading(false);
      toast("Success! Check email for details", { type: "success" });
    } else {
      setLoading(false);
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="page">
      {/* Screen 1 */}
      <div className="plans-screen-wrapper" id="bookings">
        <div className="silver-clean">
          <div className="top-silver">
            <h1>SILVER</h1>
          </div>
          <div className="body-silver">
            <div>
              <h3>suggest a date...</h3>
            </div>
            <Calendar
              /*onChange={onChange} value={value} */ style={{ flex: 1 }}
            />
            <div>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Check
                  inline
                  label="Dishes"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Vaccuming"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="Mopping / Sweeping "
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />

                <Form.Check
                  inline
                  label="Bins"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Surfaces"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="Mirrors "
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />
              </Form.Group>
            </div>
          </div>
          <div className="footer-silver">
            <StripeCheckout
              stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
              token={(token) => {
                handleToken(token, customProduct);
                setCustomProduct({
                  name: "Custom Package",
                  price: 20,
                  quantity: 1,
                });
              }}
              billingAddress
              shippingAddress
              amount={customProduct.price * customProduct.quantity * 100}
              name={customProduct.name}
            />
          </div>
        </div>
        <div className="gold-clean">
          <div className="top-silver">
            <h1>GOLD</h1>
          </div>
          <div className="body-silver">
            <div>
              <h3>suggest a date...</h3>
            </div>
            <Calendar
              /*onChange={onChange} value={value} */ style={{ flex: 1 }}
            />
            <div>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Check
                  inline
                  label="Oven Clean"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Fridge Clean"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="Organizing "
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />
                <Form.Check
                  inline
                  label="Folding"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Beddings"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="Windows "
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />

                <Form.Check
                  inline
                  label="Cupboard Clean"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
              </Form.Group>
            </div>
          </div>
          <div className="footer-silver">
            <StripeCheckout
              stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
              token={(token) => {
                handleToken(token, customProduct);
                setCustomProduct({
                  name: "Custom Package",
                  price: 20,
                  quantity: 1,
                });
              }}
              billingAddress
              shippingAddress
              amount={customProduct.price * customProduct.quantity * 100}
              name={customProduct.name}
            />
          </div>
        </div>
        <div className="poster">
          <img src={image} style={{ height: "70%", borderRadius: "20px" }} />
        </div>

        <div className="to-gardening">Looking For Gardening Services?</div>
        {/* <div className="silver-garden">x</div>
        <div className="gold-garden">x</div> */}
        {/* <img className="big-circle" src={large} alt="" />
        <img className="medium-circle" src={medium} alt="" />
        <img className="small-circle" src={small} alt="" /> */}
      </div>
      {/* Screen 2 */}
      <div className="plans-screen-wrapper" id="custom">
        <div className="silver-clean">
          <div className="top-silver">
            <h1>SILVER</h1>
          </div>
          <div className="body-silver">
            <div>
              <h3>suggest a date...</h3>
            </div>
            <Calendar
              /*onChange={onChange} value={value} */ style={{ flex: 1 }}
            />
            <div>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Check
                  inline
                  label="Lawn Mowing"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Garden Litter"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="General Garden Care"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />
              </Form.Group>
            </div>
          </div>
          <div className="footer-silver">
            <StripeCheckout
              stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
              token={(token) => {
                handleToken(token, customProduct);
                setCustomProduct({
                  name: "Custom Package",
                  price: 20,
                  quantity: 1,
                });
              }}
              billingAddress
              shippingAddress
              amount={customProduct.price * customProduct.quantity * 100}
              name={customProduct.name}
            />
          </div>
        </div>
        <div className="gold-clean">
          <div className="top-silver">
            <h1>GOLD</h1>
          </div>
          <div className="body-silver">
            <div>
              <h3>suggest a date...</h3>
            </div>
            <Calendar
              /*onChange={onChange} value={value} */ style={{ flex: 1 }}
            />
            <div>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Check
                  inline
                  label="Flower Bed Weeding"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-1`}
                />
                <Form.Check
                  inline
                  label="Branch and bush Trimmings"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  // disabled
                  label="Sidewalk / Driveway Weeding "
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-3`}
                />
              </Form.Group>
            </div>
          </div>
          <div className="footer-silver">
            <StripeCheckout
              stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
              token={(token) => {
                handleToken(token, customProduct);
                setCustomProduct({
                  name: "Custom Package",
                  price: 20,
                  quantity: 1,
                });
              }}
              billingAddress
              shippingAddress
              amount={customProduct.price * customProduct.quantity * 100}
              name={customProduct.name}
            />
          </div>
        </div>
        <div className="poster">
          <img src={image1} style={{ height: "70%", borderRadius: "20px" }} />
        </div>

        <div className="to-gardening">Looking For Cleaning Services?</div>
        {/* <div className="silver-garden">x</div>
        <div className="gold-garden">x</div> */}
        {/* <img className="big-circle" src={large} alt="" />
        <img className="medium-circle" src={medium} alt="" />
        <img className="small-circle" src={small} alt="" /> */}
      </div>
    </div>
  );
}
