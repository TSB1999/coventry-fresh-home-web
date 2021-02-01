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
                <h1>Domestic Cleaning & Gardening Services</h1>
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
            <div className="form-section">
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
                    label="Garden Care"
                    type={"checkbox"}
                    id={`inline-${"checkbox"}-3`}
                  />

                  <Form.Check
                    inline
                    label="Flower Bed / Plant Weeding"
                    type={"checkbox"}
                    id={`inline-${"checkbox"}-1`}
                  />
                  <Form.Check
                    inline
                    label="Tree Branch / Bush Trimming"
                    type={"checkbox"}
                    id={`inline-${"checkbox"}-2`}
                  />
                  <Form.Check
                    inline
                    label="Driveway / Sidewalk Weed Removal"
                    type={"checkbox"}
                    id={`inline-${"checkbox"}-2`}
                  />
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
              </Form>
            </div>

            <div className="button-wrapper">
              <div className="left-button">
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

              <div className="right-button">
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
                      backgroundColor: "green",
                      color: "#fff",
                      fontSize: 13,
                      borderColor: "green",
                    }}
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="cover-2"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 3 */}

      <div className="home-screen-wrapper-3" id="cleaning">
        <section class="presentation">
          <div class="introduction height">
            <div className="form-section">
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
              </Form>
            </div>

            <div className="button-wrapper">
              <div className="left-button">
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

              <div className="right-button">
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
                      backgroundColor: "green",
                      color: "#fff",
                      fontSize: 13,
                      borderColor: "green",
                    }}
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>
            </div>
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
