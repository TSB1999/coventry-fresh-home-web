import React from "react";
import "./styles.css";

import Form from "react-bootstrap/Form";

import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="home-container">
      <div className="screen landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="landing-top">
            <h1>Domestic Cleaning and Gardening Services</h1>
          </div>
          <div className="landing-bottom" />
        </div>
      </div>
      <div className="screen gardening">
        <div className="navbar-placeholder" />
        <div className="screen-container row">
          <div className="landing-left">
            <div className="form-header">
              <h1>GARDENING</h1>
              <h5>sumbit the form for your same day quote</h5>
            </div>

            <div className="form-body">
              <Form
                style={{
                  display: "flex",
                  flex: "1",
                  flexDirection: "column",
                  color: "grey",
                  fontWeight: "bold",
                  // fontSize: 18,
                  // textShadow: "1.5px 1.5px #000",
                  textAlign: "center",
                  textTransform: "uppercase",
                  backgroundColor: "#fff",
                  opacity: 1,
                  // borderRadius: "20px",
                  padding: "0 5rem 0 5rem",
                  // border: "0.35rem solid #979f8b",
                }}
                // onSubmit={sendGardeningEmail}
              >
                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    // backgroundColor: "red",
                    borderBottom: "1.5px solid #b6b6ad",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Form.Label style={{ marginRight: "2rem", paddingTop: "2%" }}>
                    name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    // placeholder="David Keys"
                    style={{
                      color: "#C0C0C0",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      // fontSize: 12,
                      textAlign: "center",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="exampleForm.ControlInput1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    // backgroundColor: "blue",
                    borderBottom: "1.5px solid #b6b6ad",
                  }}
                >
                  <Form.Label style={{ marginRight: "2rem", paddingTop: "2%" }}>
                    email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    // placeholder="name@example.com"
                    style={{
                      color: "#C0C0C0",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      // fontSize: 12,
                      textAlign: "center",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="exampleForm.ControlTextarea1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red",
                    flex: 1,
                    borderBottom: "1.5px solid #b6b6ad",
                  }}
                >
                  <Form.Label style={{ marginRight: "2rem", paddingTop: "2%" }}>
                    notes
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    // placeholder="Make your enquiry"
                    style={{
                      color: "#C0C0C0",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      // fontSize: 12,
                      textAlign: "center",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                    flex: 1,
                    // backgroundColor: "pink",
                    // borderBottom: "1.5px solid grey",
                  }}
                >
                  <Form.Label
                    style={{ marginRight: "1.6rem", paddingTop: "2%" }}
                  >
                    select
                  </Form.Label>
                  <div
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      // textAlign: "center",
                      // justifyContent: "flex-end",
                      border: "solid 1px #c3ccc3",
                      borderRadius: "5px",
                      padding: "8px",
                      width: "100%",
                    }}
                  >
                    <Form.Check
                      inline
                      label="Lawn Mowing"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-1`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                    <Form.Check
                      inline
                      label="Garden Litter"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-2`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                    <Form.Check
                      inline
                      // disabled
                      label="Garden Care"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-3`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />

                    <Form.Check
                      inline
                      label="Flower Bed / Plant Weeding"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-1`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                    <Form.Check
                      inline
                      label="Tree Branch / Bush Trimming"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-2`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                    <Form.Check
                      inline
                      label="Sidewalk Weed Removal"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-2`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                    <Form.Check
                      inline
                      label="Driveway Weed Removal"
                      type={"checkbox"}
                      id={`inline-${"checkbox"}-2`}
                      style={{ color: "#C0C0C0", fontSize: "0.9rem" }}
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>

            <div className="form-footer">
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
                        // borderColor: "#fff",
                        fontSize: 13,
                        color: "grey",
                        borderColor: "grey",
                        borderWidth: "2px",
                        // textShadow: "2px 2px #000",
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
                        backgroundColor: "grey",
                        color: "#",
                        fontSize: 13,
                        // borderColor: "#000",
                        borderWidth: "0px",
                      }}
                    >
                      SUBMIT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-right"></div>
        </div>
      </div>
      <div className="screen cleaning">
        <div className="navbar-placeholder" />
        <div className="screen-container"></div>
      </div>
    </div>
  );
}
