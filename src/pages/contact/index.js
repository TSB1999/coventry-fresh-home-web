import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";

import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div className="contact-screen-wrapper">
      <Navbar />

      <div className="header-wrapper">
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-items-wrapper">
        <div className="left">
          <div className="form shadow">
            <Form style={{ color: "grey", fontWeight: "bold", fontSize: 20 }}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="David Keys" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>property type</Form.Label>
                <Form.Control as="select">
                  <option>House</option>
                  <option>Flat / Apartment</option>
                  <option>Bungalow</option>
                  <option>Office</option>
                  {/* <option>5</option>
                  <option>6+</option> */}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>number of rooms</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>send us a message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Make your enquiry"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="right">
          <div >
            <div className="description">
              <div className="header">
                <h1>How can we Help</h1>
              </div>
              <div className="sub-header">
                <h4>How can we Help</h4>
              </div>
              <div className="main">
                {/* main content here */}
                <div className = "image">
                   image
                </div>
                <div className = "icons">
                   icons
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
