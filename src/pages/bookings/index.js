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
        <div className="card">
          <div className="heading">
            <h1>CLEANING</h1>
          </div>
          <div className="preview-image">
            <img
              src={preview1}
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="body">
            <Form.Group
              controlId="exampleForm.ControlSelect2"
              style={{ marginTop: "20px" }}
            >
              <Form.Check
                inline
                label="DISHES"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="VACUUMING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="MOPPING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="SWEEPING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                label="EMPTYING BINS"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                label="SURFACES"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="CLEANING MIRRORS"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="OVEN CLEAN"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="FRIDGE CLEAN"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="ORGANIZING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="FOLDING CLOTHES"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="WINDOW CLEAN"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="CUPBOARD CLEAN"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
            </Form.Group>
          </div>
          <div className="payment-calculator">
            <div style={{ display: "flex", flex: 1 }}>
              <div
                className="subtract circle"
                onClick={() =>
                  setCustomProduct({
                    name: "Custom Package",
                    price: 20,
                    quantity: customProduct.quantity
                      ? customProduct.quantity - 1
                      : customProduct.quantity,
                  })
                }
              >
                <button>-1</button>
              </div>
              <div className="quantity">
                <div style={{ fontSize: "15px" }}>{customProduct.quantity}</div>
                <div style={{ fontSize: "15px" }}>hours</div>
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
          </div>
          <div className="card-footer">
            <div className="final-payment-calculator">SUBMIT</div>
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
        <div className="card">
          <div className="heading">
            <h1>GARDENING</h1>
          </div>
          <div className="preview-image">
            <img
              src={preview}
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="body">
            <Form.Group
              controlId="exampleForm.ControlSelect2"
              style={{ marginTop: "20px" }}
            >
              <Form.Check
                inline
                label="LAWN MOWING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px ##525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="GARDEN LITTER"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="GENERAL GARDEN CARE"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                label="FLOWER BED CARE"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-1`}
              />
              <Form.Check
                inline
                label="BRANCH TRIMMINGS"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                label="BUSH TRIMMINGS"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-2`}
              />
              <Form.Check
                inline
                // disabled
                label="SIDEWALK WEEDING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
              <Form.Check
                inline
                // disabled
                label="DRIVEWAY WEEEDING"
                style={{
                  color: "#525252",
                  fontWeight: "bold",
                  // textShadow: "1px 1px #525252",
                }}
                type={"checkbox"}
                id={`inline-${"checkbox"}-3`}
              />
            </Form.Group>
          </div>

          <div className="payment-calculator">
            <div style={{ display: "flex", flex: 1 }}>
              <div
                className="subtract circle"
                onClick={() =>
                  setCustomProduct({
                    name: "Custom Package",
                    price: 20,
                    quantity: customProduct.quantity
                      ? customProduct.quantity - 1
                      : customProduct.quantity,
                  })
                }
              >
                <button>-1</button>
              </div>
              <div className="quantity">
                <div style={{ fontSize: "15px" }}>{customProduct.quantity}</div>
                <div style={{ fontSize: "15px" }}>hours</div>
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
          </div>
          <div className="card-footer">
            <div className="final-payment-calculator cta">SUBMIT</div>
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
