import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";

import { Link } from "react-scroll";

export default function index() {
  function sendGardeningEmail(e) {
    e.preventDefault();
    // console.log(e.target, 'vbreou')

    emailjs
      .sendForm(
        "gmail",
        "template_ua349no",
        e.target,
        "user_9Sc8vdXTbOS9xDXaHCNvq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function sendCleaningEmail(e) {
    e.preventDefault();
    // console.log(e.target, 'vbreou')

    emailjs
      .sendForm(
        "gmail",
        "template_6j1arch",
        e.target,
        "user_9Sc8vdXTbOS9xDXaHCNvq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="page">
      <div className="home-screen-wrapper" id="home">
        {/* <Navbar /> */}

        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <div className="header-home">
                <h1>
                  Domestic Cleaning & Gardening Services
                </h1>
              </div>
              <div className="sub-header-home">
                <h3>Get Started With Your Same Day Quote Now!</h3>
              </div>
            </div>

            <div class="cta">
              <Link
                activeClass="active"
                to="cleaning"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                <button class="cta-select">CLEANING</button>
              </Link>
              <Link
                activeClass="active"
                to="gardening"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                <button class="cta-add">GARDENING</button>
              </Link>
            </div>
          </div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 2 */}

      <div className="home-screen-wrapper-2" id="gardening">
        <section class="presentation">
          <div class="introduction-2 height">
            <Form
              style={{
                color: "#3ab34a",
                fontWeight: "bold",
                fontSize: 15,
                textTransform: "uppercase",
              }}
              onSubmit={sendGardeningEmail}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  // placeholder="David Keys"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  // placeholder="name@example.com"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Garden Job</Form.Label>
                <Form.Control
                  as="select"
                  name="garden-job"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                >
                  <option>Planting</option>
                  <option>Shrub Trimming</option>
                  <option>Lawn-Mow</option>
                  <option>Disposal</option>
                  {/* <option>5</option>
                  <option>6+</option> */}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Garden Size</Form.Label>
                <Form.Control
                  as="select"
                  name="garden-size"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                >
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
                  name="message"
                  rows={3}
                  // placeholder="Make your enquiry"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <div className="button-wrapper">
                <div>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={50}
                    duration={500}
                    // delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        borderColor : '#3ab34a',
                        backgroundColor: "transparent",
                        fontSize: 13,
                        color : '#3ab34a'
                      }}
                    >
                      BACK TO TOP
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      backgroundColor: "green",
                      fontSize: 13,
                      borderColor: "green",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          </div>
          <div class="cover-2">
            {/* <form>
              <label for="fname">First name:</label>
              <br />
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="lname">Last name:</label>
              <br />
              <input type="text" id="lname" name="lname" />
            </form> */}
          </div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 3 */}

      <div className="home-screen-wrapper-3" id="cleaning">
        <section class="presentation">
          <div class="introduction height">
            <Form
              style={{
                color: "#3ab34a",
                fontWeight: "bold",
                fontSize: 15,
                textTransform: "uppercase",
              }}
              onSubmit={sendCleaningEmail}
            >
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="name1"
                  // placeholder="David Keys"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email1"
                  // placeholder="name@example.com"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>property type</Form.Label>
                <Form.Control
                  as="select"
                  name="property-type"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                >
                  <option>House</option>
                  <option>Flat / Apartment</option>
                  <option>Bungalow</option>
                  <option>Office</option>
                  {/* <option>5</option>
                  <option>6+</option> */}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>number of rooms</Form.Label>
                <Form.Control
                  as="select"
                  name="no-rooms"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>send us a message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message1"
                  rows={3}
                  // placeholder="Make your enquiry"
                  style={{
                    color: "#979F8B",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 12,
                  }}
                />
              </Form.Group>
              <div className="button-wrapper">
                <div>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={50}
                    duration={500}
                    // delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        borderColor: "#3ab34a",
                        fontSize: 13,
                        color: "#3ab34a",
                      }}
                    >
                      BACK TO TOP
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      backgroundColor: "green",
                      color: "#fff",
                      fontSize: 13,
                      borderColor: "green",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          </div>
          <div class="cover"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>
    </div>
  );
}
