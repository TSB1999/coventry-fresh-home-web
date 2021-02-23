import React, { useState, useEffect } from "react";
import "./styles.css";

import { Link } from "react-scroll";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import emailjs from "emailjs-com";

toast.configure();

export default function Index() {
  const [loading, setLoading] = React.useState(false);

  const [value, onChange] = useState(new Date());

  // Garden Checkbox State
  const [gardenCheckState, setGardenCheckState] = useState({
    lawnmow: false,
    gardenLitter: false,
    gardenCare: false,
    weeding: false,
    trimming: false,
    sidewalkWeeding: false,
    drivewayWeeding: false,
  });

  // Cleaning Checkbox State
  const [cleaningCheckState, setCleaningCheckState] = useState({
    dish_wash: false,
    vacuum: false,
    mop_sweep: false,
    bins: false,
    surface_clean: false,
    mirror_clean: false,
    oven_clean: false,
    fridge_clean: false,
    cupboard_clean: false,
    organizing: false,
    fold_clothes: false,
    window_clean: false,
  });

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  useEffect(() => {
    console.log(cleaningCheckState);
  }, [cleaningCheckState]);

  function sendGardeningEmail(e) {
    e.preventDefault();
    console.log(e.target, "vbreou");

    emailjs
      .sendForm(
        "gmail",
        // "template_ua349no", ==> ADD EMAIL TEMPLATE
        e.target,
        // gardenCheckState,
        "user_9Sc8vdXTbOS9xDXaHCNvq"
      )
      .then(
        (result) => {
          console.log(result.text);
          // loading done
          // alert and scroll to top
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function sendCleaningEmail(e) {
    e.preventDefault();
    console.log(e.target, "vbreo1u");

    emailjs
      .sendForm(
        "gmail",
        // "template_6j1arch", ==> ADD EMAIL TEMPLATE
        e.target,
        // gardenCheckState,
        "user_9Sc8vdXTbOS9xDXaHCNvq"
      )
      .then(
        (result) => {
          console.log(result.text);
          // loading done
          // alert and scroll to top
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <div className="screen bookings-landing" id="book-land">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          {/* <div style={{ backgroundColor: "yellow", flex: 1 }}>d</div> */}
          <div className="bookings-options-container">
            <div className="bookings-content">
              <h1 className="bookings-header">make a booking</h1>
              {/* <h4 className="bookings-sub-header">
                In order to make your booking, please select the service that
                you require below and follow the instructions. We aim to process
                your enquiry and provide you with a quote within the hour.
              </h4> */}
              <Link
                className="option-1"
                activeClass="active"
                to="book-clean"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
              <Link
                className="option-2"
                activeClass="active"
                to="book-all"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
              <Link
                className="option-3"
                activeClass="active"
                to="book-gard"
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                // delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
              ></Link>
            </div>
          </div>
          {/* <div className="workflow">
            <div className="step-1">
              <div
                className="circle-step"
                style={{ backgroundColor: "transparent" }}
              >
                select your service.
              </div>
            </div>
            <div className="arrow-1">
              <i class="fas fa-arrow-right fa-3x"></i>
            </div>
            <div className="step-2">
              <div
                className="circle-step"
                style={{ backgroundColor: "transparent" }}
              >
                make an enquiry.
              </div>
            </div>
            <div className="arrow-2">
              <i class="fas fa-arrow-right fa-3x"></i>
            </div>
            <div className="step-3">
              <div
                className="circle-step"
                style={{ backgroundColor: "transparent" }}
              >
                sit tight for your quote.
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="screen gallery-cleaning" id="book-clean">
        <div className="navbar-placeholder" />
        <div
          className="screen-container row"
          style={{
            // backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          {/* <div className="landing-left"> */}

          {/* <div className="" style={{ flex: 1 }}>
            edf
          </div> */}
          <div
            className="garden-form"
            style={{
              margin: "auto",
              // backgroundColor: "yellow",
              alignItems: "center",
              flex: 2,
            }}
          >
            <div className="form-header">
              <h1>Home</h1>
              {/* <h5>sumbit the form for your same day quote</h5> */}
            </div>

            <div className="form-body" style={{ opacity: 1 }}>
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
                  opacity: 0.8,
                  // borderRadius: "20px",
                  padding: "0 5rem 0 5rem",
                  // border: "0.35rem solid #979f8b",
                }}
                onSubmit={sendCleaningEmail}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 3 }}>
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
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              dish_wash: !cleaningCheckState["dish_wash"],
                            })
                          }
                          inline
                          label="Dish Washing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              vacuum: !cleaningCheckState["vacuum"],
                            })
                          }
                          inline
                          label="Vacuumc Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              mop_sweep: !cleaningCheckState["mop_sweep"],
                            })
                          }
                          inline
                          // disabled
                          label="Mopping & Sweeping"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-3`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />

                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              bins: !cleaningCheckState["bins"],
                            })
                          }
                          inline
                          label="Emptying Bins"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              surface_clean: !cleaningCheckState[
                                "surface_clean"
                              ],
                            })
                          }
                          inline
                          label="Surface Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              mirror_clean: !cleaningCheckState["mirror_clean"],
                            })
                          }
                          inline
                          label="Mirror Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              oven_clean: !cleaningCheckState["oven_clean"],
                            })
                          }
                          inline
                          label="Oven Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fridge_clean: !cleaningCheckState["fridge_clean"],
                            })
                          }
                          inline
                          label="Fridge Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              cupboard_clean: !cleaningCheckState[
                                "cupboard_clean"
                              ],
                            })
                          }
                          inline
                          label="Cupboard Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              organizing: !cleaningCheckState["organizing"],
                            })
                          }
                          inline
                          label="Organizing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fold_clothes: !cleaningCheckState["fold_clothes"],
                            })
                          }
                          inline
                          label="Folding Clothes"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              window_clean: !cleaningCheckState["window_clean"],
                            })
                          }
                          inline
                          label="Window Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                      </div>
                    </Form.Group>
                    <input
                      name="dish_wash"
                      value={cleaningCheckState.dish_wash}
                      style={{ display: "none" }}
                    />
                    <input
                      name="vacuum"
                      value={cleaningCheckState.vacuum}
                      style={{ display: "none" }}
                    />
                    <input
                      name="mop_sweep"
                      value={cleaningCheckState.mop_sweep}
                      style={{ display: "none" }}
                    />
                    <input
                      name="bins"
                      value={cleaningCheckState.bins}
                      style={{ display: "none" }}
                    />
                    <input
                      name="surface_clean"
                      value={cleaningCheckState.surface_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="mirror_clean"
                      value={cleaningCheckState.mirror_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="oven_clean"
                      value={cleaningCheckState.oven_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="fridge_clean"
                      value={cleaningCheckState.fridge_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="cupboard_clean"
                      value={cleaningCheckState.cupboard_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="organizing"
                      value={cleaningCheckState.organizing}
                      style={{ display: "none" }}
                    />
                    <input
                      name="fold_clothes"
                      value={cleaningCheckState.fold_clothes}
                      style={{ display: "none" }}
                    />
                    <input
                      name="window_clean"
                      value={cleaningCheckState.window_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="clean_date"
                      value={JSON.stringify(value)}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flex: 1,
                      // backgroundColor: "red",
                      margin: "auto",
                      // backgroundColor: "yellow",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Calendar
                      onChange={onChange}
                      value={value}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <div className="form-footer">
                  <div className="button-wrapper">
                    <div className="left-button">
                      <Link
                        activeClass="active"
                        to="book-land"
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
                        to="book-land"
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
              </Form>
            </div>
          </div>

          {/* </div> */}
          {/* <div className="landing-right" style={{ backgroundColor: "yellow" }}>
            <div className="garden-info"></div>
          </div> */}
        </div>
      </div>
      {/*  */}
      <div className="screen gallery-all" id="book-all">
        <div className="navbar-placeholder" />
        <div
          className="screen-container row"
          style={{
            // backgroundColor: "red",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {/* <div className="landing-left"> */}

          {/* <div className="" style={{ flex: 1 }}>
            edf
          </div> */}
          <div
            className="garden-form"
            style={{
              margin: "auto",
              // backgroundColor: "yellow",
              alignItems: "center",
              flex: 2,
            }}
          >
            <div className="form-header">
              <h1>Both</h1>
              {/* <h5>sumbit the form for your same day quote</h5> */}
            </div>

            <div className="form-body" style={{ opacity: 1 }}>
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
                  opacity: 0.8,
                  // borderRadius: "20px",
                  padding: "0 5rem 0 5rem",
                  // border: "0.35rem solid #979f8b",
                }}
                // onSubmit={sendGardeningEmail}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 3 }}>
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
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              dish_wash: !cleaningCheckState["dish_wash"],
                            })
                          }
                          inline
                          label="Dish Washing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              vacuum: !cleaningCheckState["vacuum"],
                            })
                          }
                          inline
                          label="Vacuumc Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              mop_sweep: !cleaningCheckState["mop_sweep"],
                            })
                          }
                          inline
                          // disabled
                          label="Mopping & Sweeping"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-3`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />

                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              bins: !cleaningCheckState["bins"],
                            })
                          }
                          inline
                          label="Emptying Bins"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              surface_clean: !cleaningCheckState[
                                "surface_clean"
                              ],
                            })
                          }
                          inline
                          label="Surface Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              mirror_clean: !cleaningCheckState["mirror_clean"],
                            })
                          }
                          inline
                          label="Mirror Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              oven_clean: !cleaningCheckState["oven_clean"],
                            })
                          }
                          inline
                          label="Oven Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fridge_clean: !cleaningCheckState["fridge_clean"],
                            })
                          }
                          inline
                          label="Fridge Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              cupboard_clean: !cleaningCheckState[
                                "cupboard_clean"
                              ],
                            })
                          }
                          inline
                          label="Cupboard Cleaning"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              organizing: !cleaningCheckState["organizing"],
                            })
                          }
                          inline
                          label="Organizing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fold_clothes: !cleaningCheckState["fold_clothes"],
                            })
                          }
                          inline
                          label="Folding Clothes"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              window_clean: !cleaningCheckState["window_clean"],
                            })
                          }
                          inline
                          label="Window Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState(
                              // gardenCheckState['lawnmow'] = !gardenCheckState['lawnmow']
                              {
                                ...gardenCheckState,
                                lawnmow: !gardenCheckState["lawnmow"],
                              }
                            )
                          }
                          // onChange = {() => setLawnMow(!lawnMow)}
                          inline
                          label="Lawn Mowing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              gardenLitter: !gardenCheckState["gardenLitter"],
                            })
                          }
                          inline
                          label="Garden Litter"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setGardenCare(!gardenCare)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              gardenCare: !gardenCheckState["gardenCare"],
                            })
                          }
                          inline
                          label="Garden Care"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-3`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />

                        <Form.Check
                          // onChange = {() => setWeeding(!weeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              weeding: !gardenCheckState["weeding"],
                            })
                          }
                          inline
                          label="Flower Bed / Plant Weeding"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setTrimming(!trimming)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              trimming: !gardenCheckState["trimming"],
                            })
                          }
                          inline
                          label="Tree Branch / Bush Trimming"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setSidewalkWeeding(!sidewalkWeeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              sidewalkWeeding: !gardenCheckState[
                                "sidewalkWeeding"
                              ],
                            })
                          }
                          inline
                          label="Sidewalk Weed Removal"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setDrivewayWeeding(!drivewayWeeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              drivewayWeeding: !gardenCheckState[
                                "drivewayWeeding"
                              ],
                            })
                          }
                          inline
                          label="Driveway Weed Removal"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                      </div>
                    </Form.Group>

                    <input
                      name="dish_wash"
                      value={cleaningCheckState.dish_wash}
                      style={{ display: "none" }}
                    />
                    <input
                      name="vacuum"
                      value={cleaningCheckState.vacuum}
                      style={{ display: "none" }}
                    />
                    <input
                      name="mop_sweep"
                      value={cleaningCheckState.mop_sweep}
                      style={{ display: "none" }}
                    />
                    <input
                      name="bins"
                      value={cleaningCheckState.bins}
                      style={{ display: "none" }}
                    />
                    <input
                      name="surface_clean"
                      value={cleaningCheckState.surface_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="mirror_clean"
                      value={cleaningCheckState.mirror_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="oven_clean"
                      value={cleaningCheckState.oven_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="fridge_clean"
                      value={cleaningCheckState.fridge_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="cupboard_clean"
                      value={cleaningCheckState.cupboard_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="organizing"
                      value={cleaningCheckState.organizing}
                      style={{ display: "none" }}
                    />
                    <input
                      name="fold_clothes"
                      value={cleaningCheckState.fold_clothes}
                      style={{ display: "none" }}
                    />
                    <input
                      name="window_clean"
                      value={cleaningCheckState.window_clean}
                      style={{ display: "none" }}
                    />
                    <input
                      name="lawnmow"
                      value={gardenCheckState.lawnmow}
                      style={{ display: "none" }}
                    />
                    <input
                      name="gardenLitter"
                      value={gardenCheckState.gardenLitter}
                      style={{ display: "none" }}
                    />
                    <input
                      name="gardenCare"
                      value={gardenCheckState.gardenCare}
                      style={{ display: "none" }}
                    />
                    <input
                      name="weeding"
                      value={gardenCheckState.weeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="trimming"
                      value={gardenCheckState.trimming}
                      style={{ display: "none" }}
                    />
                    <input
                      name="sidewalkWeeding"
                      value={gardenCheckState.sidewalkWeeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="drivewayWeeding"
                      value={gardenCheckState.drivewayWeeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="both_date"
                      value={JSON.stringify(value)}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flex: 1,
                      // backgroundColor: "red",
                      margin: "auto",
                      // backgroundColor: "yellow",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Calendar
                      onChange={onChange}
                      value={value}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <div className="form-footer">
                  <div className="button-wrapper">
                    <div className="left-button">
                      <Link
                        activeClass="active"
                        to="book-land"
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
                        to="book-land"
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
              </Form>
            </div>
          </div>
          {/* <div className="" style={{ flex: 1 }}>
            edfw
          </div> */}
        </div>
      </div>
      {/*  */}

      <div className="screen gardening" id="book-gard">
        <div className="navbar-placeholder" />
        <div
          className="screen-container row"
          style={{
            // backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          {/* <div className="landing-left"> */}

          {/* <div className="" style={{ flex: 1 }}>
            edf
          </div> */}
          <div
            className="garden-form"
            style={{
              margin: "auto",
              // backgroundColor: "yellow",
              alignItems: "center",
              flex: 2,
            }}
          >
            <div className="form-header">
              <h1>Gardening</h1>
              {/* <h5>sumbit the form for your same day quote</h5> */}
            </div>

            <div className="form-body" style={{ opacity: 1 }}>
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
                  opacity: 0.8,
                  // borderRadius: "20px",
                  padding: "0 5rem 0 5rem",
                  // border: "0.35rem solid #979f8b",
                }}
                onSubmit={sendGardeningEmail}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 3 }}>
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
                          onChange={() =>
                            setGardenCheckState(
                              // gardenCheckState['lawnmow'] = !gardenCheckState['lawnmow']
                              {
                                ...gardenCheckState,
                                lawnmow: !gardenCheckState["lawnmow"],
                              }
                            )
                          }
                          // onChange = {() => setLawnMow(!lawnMow)}
                          inline
                          label="Lawn Mowing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              gardenLitter: !gardenCheckState["gardenLitter"],
                            })
                          }
                          inline
                          label="Garden Litter"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setGardenCare(!gardenCare)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              gardenCare: !gardenCheckState["gardenCare"],
                            })
                          }
                          inline
                          label="Garden Care"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-3`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />

                        <Form.Check
                          // onChange = {() => setWeeding(!weeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              weeding: !gardenCheckState["weeding"],
                            })
                          }
                          inline
                          label="Flower Bed / Plant Weeding"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setTrimming(!trimming)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              trimming: !gardenCheckState["trimming"],
                            })
                          }
                          inline
                          label="Tree Branch / Bush Trimming"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setSidewalkWeeding(!sidewalkWeeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              sidewalkWeeding: !gardenCheckState[
                                "sidewalkWeeding"
                              ],
                            })
                          }
                          inline
                          label="Sidewalk Weed Removal"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                        <Form.Check
                          // onChange = {() => setDrivewayWeeding(!drivewayWeeding)}
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              drivewayWeeding: !gardenCheckState[
                                "drivewayWeeding"
                              ],
                            })
                          }
                          inline
                          label="Driveway Weed Removal"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
                          style={{ color: "grey", fontSize: "0.9rem" }}
                        />
                      </div>
                    </Form.Group>
                    <input
                      name="lawnmow"
                      value={gardenCheckState.lawnmow}
                      style={{ display: "none" }}
                    />
                    <input
                      name="gardenLitter"
                      value={gardenCheckState.gardenLitter}
                      style={{ display: "none" }}
                    />
                    <input
                      name="gardenCare"
                      value={gardenCheckState.gardenCare}
                      style={{ display: "none" }}
                    />
                    <input
                      name="weeding"
                      value={gardenCheckState.weeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="trimming"
                      value={gardenCheckState.trimming}
                      style={{ display: "none" }}
                    />
                    <input
                      name="sidewalkWeeding"
                      value={gardenCheckState.sidewalkWeeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="drivewayWeeding"
                      value={gardenCheckState.drivewayWeeding}
                      style={{ display: "none" }}
                    />
                    <input
                      name="garden_date"
                      value={JSON.stringify(value)}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flex: 1,
                      // backgroundColor: "red",
                      margin: "auto",
                      // backgroundColor: "yellow",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Calendar
                      onChange={onChange}
                      value={value}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <div className="form-footer">
                  <div className="button-wrapper">
                    <div className="left-button">
                      <Link
                        activeClass="active"
                        to="book-land"
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
                        to="book-land"
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
              </Form>
            </div>
          </div>
          {/* <div className="" style={{ flex: 1 }}>
            edfw
          </div> */}
        </div>
      </div>
    </div>
  );
}
