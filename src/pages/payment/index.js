import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./styles.css";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

export default function Payment() {
  const [select, setSelect] = useState(0);
  const [code, setCode] = useState("");
  const [quote, setQuote] = useState({});
  const [priceData, setPriceData] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(priceData);
  }, [priceData]);
  useEffect(() => {
    console.log(code);
  }, [code]);
  useEffect(() => {
    console.log(quote);
    // typeof quote === "object" ? console.log("isObj") : console.log("notObj");
  }, [quote]);

  const handleInput = (e) => {
    setCode(e.target.value);
  };

  function decrypt(code) {
    const decryptedString = cryptr.decrypt(code);

    console.log("dec" + decryptedString);

    setQuote(JSON.parse(decryptedString));
  }

  async function handleToken(token, product) {
    // setLoading(true);
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
      //   setLoading(false);
      toast("Success! Check email for details", { type: "success" });
    } else {
      //   setLoading(false);
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="payment-portal">
      <div className="navbar-placeholder" />
      <div className="screen-container column">
        <div
          className="portal-form"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ backgroundColor: "red", width: "50vw", height: "50vh" }}
          >
            <nav
              style={{
                backgroundColor: "green",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button onClick={() => setSelect(0)}>Donation</button>
              <button onClick={() => setSelect(1)}>Quote</button>
            </nav>
            <div
              style={{
                backgroundColor: "yellow",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {select == 0 && (
                <div>
                  <input placeholder="enter amount" style={{ margin: "5px" }} />

                  <StripeCheckout
                    stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                    billingAddress
                    shippingAddress
                  />
                </div>
              )}

              {select == 1 && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 1, backgroundColor: "purple" }}>
                    <h5>{quote.name || "name"}</h5>
                    <h5>{quote.package || "package"}</h5>
                    <h5>{quote.price || "price"}</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "blue",
                      flex: 1,
                    }}
                  >
                    <input
                      placeholder="enter code"
                      style={{ margin: "5px", flex: 1 }}
                      onChange={(e) => handleInput(e)}
                    />

                    <button style={{ flex: 1 }} onClick={() => decrypt(code)}>
                      Get Price
                    </button>

                    <StripeCheckout
                      stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
                      token={(token) => {
                        handleToken(token, quote);
                      }}
                      currency="GBP"
                      billingAddress
                      shippingAddress
                      amount={quote.price * 100}
                      name={`${quote.name} - ${quote.package}`}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
