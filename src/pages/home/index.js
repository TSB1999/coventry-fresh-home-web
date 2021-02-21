import React from "react";
import "./styles.css";

import Form from "react-bootstrap/Form";

import { Link } from "react-scroll";
export default function Home() {
  return (
    <div className="home-container">
      <div className="screen landing" id="home-landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="landing-top">
            <h1>Domestic Cleaning and Gardening Services</h1>
            <div className="cleaning-button">
              <div style={{ padding: "0.2rem", backgroundColor: "#636c59" }}>
                <Link
                  className="scroll-link"
                  activeClass="active"
                  to="home-clean"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <button>cleaning</button>
                </Link>
              </div>
            </div>
            <div className="gardening-button">
              <div style={{ padding: "0.2rem", backgroundColor: "white" }}>
                <Link
                  className="scroll-link"
                  activeClass="active"
                  to="home-gard"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <button>gardening</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="screen gardening" id="home-gard">
        <div className="navbar-placeholder" />
        <div className="screen-container row">
          <div className="landing-left">
            <div className="garden-form">
              <div className="form-header">
                <h1>Gardening</h1>
                <h5>sumbit the form for your same day quote</h5>
              </div>

              <div className="form-body">
                <Form
                  style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    color: "#636c59",
                    fontWeight: "bold",
                    // fontSize: 18,
                    // textShadow: "1.5px 1.5px #000",
                    // textAlign: "center",
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
                      flexDirection: "column",
                      flex: 1,
                      // backgroundColor: "red",
                      // borderBottom: "1.5px solid #b6b6ad",
                      justifyContent: "center",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      // placeholder="David Keys"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flex: 1,
                      // backgroundColor: "blue",
                      // borderBottom: "1.5px solid #b6b6ad",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      // placeholder="name@example.com"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlTextarea1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      justifyContent: "flex-start",
                      // backgroundColor: "red",
                      flex: 1,
                      // borderBottom: "1.5px solid #b6b6ad",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      notes
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      // placeholder="Make your enquiry"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      // justifyContent: "center",
                      flex: 8,
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
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Garden Litter"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        // disabled
                        label="Garden Care"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-3`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />

                      <Form.Check
                        inline
                        label="Flower Bed / Plant Weeding"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-1`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Tree Branch / Bush Trimming"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Sidewalk Weed Removal"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Driveway Weed Removal"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
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
                      to="home-landing"
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
                          color: "#636c59",
                          borderColor: "#636c59",
                          borderWidth: "2px",
                          borderRadius: "0",
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
                          backgroundColor: "#636c59",
                          color: "#",
                          fontSize: 13,
                          // borderColor: "#000",
                          borderWidth: "0px",
                          borderRadius: "0",
                        }}
                      >
                        SUBMIT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-right">
            <div className="garden-info"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="screen cleaning" id="home-clean">
        <div className="navbar-placeholder" />
        <div className="screen-container">
          <div className="cleaning-left"></div>
          <div className="cleaning-right">
            <div className="garden-form">
              <div className="form-header">
                <h1>Cleaning</h1>
                <h5>sumbit the form for your same day quote</h5>
              </div>

              <div className="form-body">
                <Form
                  style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    color: "#636c59",
                    fontWeight: "bold",
                    // fontSize: 18,
                    // textShadow: "1.5px 1.5px #000",
                    // textAlign: "center",
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
                      flexDirection: "column",
                      flex: 1,
                      // backgroundColor: "red",
                      // borderBottom: "1.5px solid #b6b6ad",
                      justifyContent: "center",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      // placeholder="David Keys"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flex: 1,
                      // backgroundColor: "blue",
                      // borderBottom: "1.5px solid #b6b6ad",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      // placeholder="name@example.com"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlTextarea1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      justifyContent: "flex-start",
                      // backgroundColor: "red",
                      flex: 1,
                      // borderBottom: "1.5px solid #b6b6ad",
                    }}
                  >
                    <Form.Label
                      style={{ marginRight: "2rem", paddingTop: "2%" }}
                    >
                      notes
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      // placeholder="Make your enquiry"
                      style={{
                        color: "grey",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        // fontSize: 12,
                        // textAlign: "center",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      // justifyContent: "center",
                      flex: 8,
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
                        label="Dish Washing"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-1`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Vacuumc Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        // disabled
                        label="Mopping & Sweeping"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-3`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />

                      <Form.Check
                        inline
                        label="Emptying Bins"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-1`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Surface Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Mirror Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Oven Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Fridge Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Cupboard Cleaning"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Organizing"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Folding Clothes"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
                      />
                      <Form.Check
                        inline
                        label="Window Clean"
                        type={"checkbox"}
                        id={`inline-${"checkbox"}-2`}
                        style={{ color: "grey", fontSize: "0.9rem" }}
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
                      to="home-landing"
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
                          color: "#636c59",
                          borderColor: "#636c59",
                          borderWidth: "2px",
                          borderRadius: "0",
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
                          backgroundColor: "#636c59",
                          color: "#",
                          fontSize: 13,
                          // borderColor: "#000",
                          borderWidth: "0px",
                          borderRadius: "0",
                        }}
                      >
                        SUBMIT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
