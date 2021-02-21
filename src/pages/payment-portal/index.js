import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./styles.css";

const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

export default function Portal() {
  const [priceData, setPriceData] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(priceData);
  }, [priceData]);

  function genURL(e) {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      package: e.target[1].value,
      price: e.target[2].value,
    };
    setPriceData(data);

    const encryptedString = cryptr.encrypt(JSON.stringify(data));
    setUrl(encryptedString);
    const decryptedString = cryptr.decrypt(encryptedString);

    console.log("enc" + encryptedString);
    console.log("dec" + decryptedString);
  }

  return (
    <div className="payment-portal">
      <div className="navbar-placeholder" />
      <div className="screen-container column">
        <div className="portal-form">
          <Form className="admin-form" onSubmit={(e) => genURL(e)}>
            <Form.Group controlId="exampleForm.ControlInput9">
              <Form.Label> cutomer name (paste here)</Form.Label>
              <Form.Control
                type="text"
                name="name"
                // placeholder="David Keys"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput9">
              <Form.Label>package</Form.Label>
              <Form.Control as="select">
                <option>Silver</option>
                <option>Gold</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea9">
              <Form.Label>
                price (number only - without currency sign)
              </Form.Label>
              <Form.Control
                type="text"
                name="price"
                // placeholder="David Keys"
              />
            </Form.Group>

            <button type="submit" class="btn btn-primary">
              GENERATE
            </button>
          </Form>

          <Form.Group
            controlId="exampleForm.ControlTextarea9"
            className="url-code"
          >
            <Form.Label>url</Form.Label>
            <Form.Control
              type="text"
              name="url"
              value={url}
              // placeholder="David Keys"
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}
