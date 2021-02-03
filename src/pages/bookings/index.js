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
import preview from "./images/cdc-wz3ijPHvL54-unsplash.jpg";
import preview1 from "./images/volha-flaxeco-jCPL0oxBhB0-unsplash.jpg";
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
        <div className="gold-clean bs-right">
          <div className="top-silver">
            <h1>CLEANING</h1>
          </div>
          <div className="preview-image">
            <img
              src={preview1}
              style={{ width: "80%", borderRadius: "20px" }}
            />
          </div>
          <div className="top-subtitle">
            {/* <h4>CHOOSE YOUR USE CASES...</h4> */}
          </div>
          <div className="body-silver">
            <Form.Group
              controlId="exampleForm.ControlSelect2"
              style={{ marginTop: "20px" }}
            >
              <Form.Check
                inline
                label="DISHES"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="VACUUMING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="MOPPING / SWEEPING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                label="EMPTYING BINS"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                label="SURFACES"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="CLEANING MIRRORS"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="OVEN CLEAN"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="FRIDGE CLEAN"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="ORGANIZING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="FOLDING CLOTHES"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="WINDOW CLEAN"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="CUPBOARD CLEAN"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
            </Form.Group>
          </div>

          <div className="payment-calculator">$50</div>
          <div className="footer-silver">
            <div className="final-payment-calculator">$50</div>
            <div className="final-payment-stripe">
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
        </div>
        <div className="poster">
          <div style={{ flex: 1 }}>
            <Calendar
              /*onChange={onChange} value={value}*/ style={{ height: "20px" }}
            />
          </div>
          <div style={{ flex: 1 }}></div>
          {/* <img src={image} style={{ height: "70%", borderRadius: "20px" }} /> */}
        </div>
        <div className="gold-clean bs-left">
          <div className="top-silver">
            <h1>GARDENING</h1>
          </div>
          <div className="preview-image">
            <img src={preview} style={{ width: "80%", borderRadius: "20px" }} />
          </div>
          <div className="top-subtitle">
            {/* <h4>CHOOSE YOUR USE CASES...</h4> */}
          </div>
          <div className="body-silver">
            <Form.Group
              controlId="exampleForm.ControlSelect2"
              style={{ marginTop: "20px" }}
            >
              <Form.Check
                inline
                label="LAWN MOWING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="GARDEN LITTER"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="GENERAL GARDEN CARE"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                label="FLOWER BED CARE"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="BRANCH TRIMMINGS"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                label="BUSH TRIMMINGS"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="SIDEWALK WEEDING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="DRIVEWAY WEEEDING"
                style={{ color: "#979f8b", fontWeight: "bold" }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
            </Form.Group>
          </div>
          <div className="payment-calculator">$50</div>
          <div className="footer-silver">
            <div className="final-payment-calculator cta">$50</div>
            <div className="final-payment-stripe">
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
        </div>

        {/* <div className="to-gardening">Looking For Gardening Services?</div>
        <img className="big-circle" src={large} alt="" />
        <img className="medium-circle" src={medium} alt="" />
        <img className="small-circle" src={small} alt="" /> */}
      </div>
    </div>
  );
}
