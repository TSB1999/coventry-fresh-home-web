import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./styles.css";

export default function Portal() {
  const [priceData, setPriceData] = useState({});
  const [url, setUrl] = useState("");

  function sendGardeningEmail(e) {
    e.preventDefault();
    console.log(e.target, "vbreou");
  }

  return (
    <div className="payment-portal">
      <Form
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          color: "#919d5d",
          fontWeight: "bold",
          fontSize: 18,
          textShadow: "1px 1px #a87c3d",
          textAlign: "center",
          textTransform: "uppercase",
          backgroundColor: "#fff",
          opacity: 1,
          padding: "0 5rem 0 5rem",
        }}
        onSubmit={sendGardeningEmail}
      >
        <Form.Group
          controlId="exampleForm.ControlInput1"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form.Label> cutomer name (paste here)</Form.Label>
          <Form.Control
            type="text"
            name="name"
            // placeholder="David Keys"
            style={{
              color: "#979F8B",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 12,
              textAlign: "center",
            }}
          />
        </Form.Group>
        <Form.Group
          controlId="exampleForm.ControlInput1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            // backgroundColor: "blue",
          }}
        >
          <Form.Label>package</Form.Label>
          <Form.Control as="select">
            <option>Silver</option>
            <option>Gold</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
          }}
        >
          <Form.Label>price (number only - without currency sign)</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            // placeholder="Make your enquiry"
            style={{
              color: "#979F8B",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 12,
              textAlign: "center",
            }}
          />
        </Form.Group>

        <button
          type="submit"
          class="btn btn-primary"
          style={{
            width: "100%",
            fontWeight: "bold",
            //   backgroundColor: "transparent",
            borderColor: "#fff",
            fontSize: 13,
            //   color: "#fff",
          }}
        >
          GENERATE
        </button>
      </Form>

      <h1>{"url address : " + url}</h1>
    </div>
  );
}
