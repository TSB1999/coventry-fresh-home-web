import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./styles.css";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/navbar";

import Spinner from "react-bootstrap/Spinner";

const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

export default function Payment() {
  const [select, setSelect] = useState(0);
  const [code, setCode] = useState("");
  const [quote, setQuote] = useState({});
  const [priceData, setPriceData] = useState({});
  const [loading, setLoading] = useState(false);
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
      toast("Success! Payment Recieved - We'll email you soon", {
        type: "success",
      });
    } else {
      setLoading(false); // Here if you want to use it
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="first-screen bookings-landing">
        <div className="first-screen-container column">
          <div className="payment-container">
            <div className="bookings-content">
              <div style={{ flex: 2, display: "flex" }}>
                <div
                  className="portal-form"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      // backgroundColor: "blue",
                      width: "50vw",
                      height: "50vh",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gridTemplateRows: "repeat(5, 1fr)",
                    }}
                  >
                    <div
                      style={{
                        gridColumn: "1/5",
                        display: "flex",
                        flexDirection: "row",
                        // backgroundColor: "blue",
                        flex: 1,
                      }}
                    >
                      <button
                        style={{
                          flex: 1,
                          margin: "5px",
                          alignSelf: "start",
                          borderRadius: "0.3rem",
                          fontWeight: "bold",
                          color: "red",
                          border: "0.17rem solid red",
                        }}
                        onClick={(e) => {
                          setCode("");
                          setQuote({});
                        }}
                      >
                        CLEAR
                      </button>
                      <input
                        placeholder="enter code"
                        value={code}
                        style={{
                          margin: "5px",
                          flex: 4,
                          alignSelf: "start",
                          borderRadius: "0.3rem",
                          color: "#3ab34a",
                          border: "0.17rem solid #3ab34a",
                        }}
                        onChange={(e) => handleInput(e)}
                      />

                      <button
                        style={{
                          flex: 1,
                          margin: "5px",
                          alignSelf: "start",
                          borderRadius: "0.3rem",
                          fontWeight: "bold",
                          color: "#3ab34a",
                          border: "0.17rem solid #3ab34a",
                        }}
                        onClick={() => decrypt(code)}
                      >
                        GET PRICE
                      </button>
                    </div>
                    <h1
                      style={{
                        gridColumn: "1/2",
                        gridRow: "2/3",
                        alignSelf: "start",
                        textTransform: "uppercase",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      name
                    </h1>
                    <h1
                      style={{
                        gridColumn: "2/5",
                        gridRow: "2/3",
                        textAlign: "right",
                        color : '#3ab34a',
                      }}
                    >
                      {quote.name || "--"}
                    </h1>
                    <h1
                      style={{
                        gridColumn: "1/2",
                        gridRow: "3/4",
                        alignSelf: "start",
                        textTransform: "uppercase",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      package
                    </h1>

                    <h1
                      style={{
                        gridColumn: "2/5",
                        gridRow: "3/4",
                        textAlign: "right",
                        color : '#3ab34a',
                      }}
                    >
                      {quote.package || "--"}
                    </h1>
                    <h1
                      style={{
                        gridColumn: "1/2",
                        gridRow: "4/5",
                        alignSelf: "start",
                        textTransform: "uppercase",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      price
                    </h1>
                    <h1
                      style={{
                        gridColumn: "2/5",
                        gridRow: "4/5",
                        textAlign: "right",
                        color : '#3ab34a',
                      }}
                    >
                      {quote.price || "--"}
                    </h1>
                    {quote.price && !loading && (
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
                        style={{
                          // flex: 1,
                          alignSelf: "start",
                          gridColumn: "1/5",
                        }}
                      />
                    )}

                    {loading && (
                      <Spinner
                        animation="border"
                        role="status"
                        style={{ height: "1rem", width: "1rem", color : "#3ab34a"}}
                      >
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    )}
                  </div>
                </div>
              </div>
              <div className="workflow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
