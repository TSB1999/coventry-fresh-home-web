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
        <div class="top">
          <div class="introduction">
            <div class="heading-text">
              <h1>Domestic Cleaning and Gardening Services</h1>
            </div>

            {/* <div class="sub-heading-text">
              <h3>Get Started With Your Same Day Quote Now!</h3>
            </div> */}

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
                ignoreCancelEvents={true}
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
                ignoreCancelEvents={true}
              >
                <button class="cta-add">GARDENING</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom"></div>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 2 */}

      <div className="home-screen-wrapper-2" id="gardening">
        <div class="garden-container">
          <div className="left"></div>
          <div className="right">
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
                opacity: 0.8,
                borderRadius: "20px",
                padding: "5rem",
                // border: "0.35rem solid #979f8b",
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
                  // borderTop: "1.5px solid #8cc540",
                  // paddingTop: "10px",
                  flex: 1,
                }}
              >
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
                    textAlign: "center",
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlSelect1"
                style={{
                  // display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "1",
                  // borderTop: "1.5px solid #8cc540",
                  // borderBottom: "1.5px solid #8cc540",
                }}
              >
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
                  label="Sidewalk Weed Removal"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
                <Form.Check
                  inline
                  label="Driveway Weed Removal"
                  type={"checkbox"}
                  id={`inline-${"checkbox"}-2`}
                />
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
                    textAlign: "center",
                  }}
                />
              </Form.Group>
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
                    ignoreCancelEvents={true}
                    style={{ width: "80%" }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        borderColor: "#919d5d",
                        fontSize: 13,
                        color: "#919d5d",
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
                    ignoreCancelEvents={true}
                    style={{ width: "80%" }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        backgroundColor: "#919d5d",
                        color: "#fff",
                        fontSize: 13,
                        borderColor: "#919d5d",
                      }}
                    >
                      SUBMIT
                    </button>
                  </Link>
                </div>
              </div>
            </Form>
          </div>
          {/* <div class="introduction-2 height non">
            <div className="form-section">
              
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
                  ignoreCancelEvents={true}
                  style={{ width: "80%" }}
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
                  ignoreCancelEvents={true}
                  style={{ width: "80%" }}
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
          </div> */}
          {/* <div class="cover-2"></div> */}
        </div>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 3 */}

      <div className="home-screen-wrapper-3" id="cleaning">
        <section class="presentation">
          <div
            class="introduction height non"
            style={{ border: "4px solid whitesmoke", boxShadow: "none" }}
          >
            <div className="form-section">
              <Form
                style={{
                  color: "#3ab34a",
                  fontWeight: "300",
                  fontSize: 18,
                  textShadow: "1px 1.5px #8cc540",
                  textAlign: "center",
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
                      textAlign: "center",
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
                      textAlign: "center",
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
                    type="text"
                    name="property-type"
                    // placeholder="name@example.com"
                    style={{
                      color: "#979F8B",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  />
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
                      textAlign: "center",
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
                  ignoreCancelEvents={true}
                  style={{ width: "80%" }}
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
                  ignoreCancelEvents={true}
                  style={{ width: "80%" }}
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
