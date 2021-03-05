import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "../../components/navbar";

import { Link } from "react-scroll";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Calendar from "react-calendar";

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
        "template_ua349no",
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
        "template_6j1arch",
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
    <div id="book-land" style={{ backgroundColor: "#3ab34a" }}>
      <Navbar />
      <div className="first-screen bookings-landing">
        <div className="first-screen-container column">
          <div className="bookings-options-container">
            <div className="bookings-content">
              <div style={{ flex: 2, display: "flex" }}>
                <Link
                  className="cleaning-panel"
                  activeClass="active"
                  to="book-clean"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1 className="bookings-panel-title">
                      home service bookings
                    </h1>
                  </div>
                </Link>
                <Link
                  className="gardening-panel"
                  activeClass="active"
                  to="book-gard"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1 className="bookings-panel-title">
                      garden service bookings
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="workflow"></div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="bookings-cleaning" id="book-clean">
        <div
          className="screen-container row"
          style={{
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "-2vh",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 2,
                backgroundColor: "#3ab34a",
                flexDirection: "row",
              }}
            >
              <div
                className="cleaning-left"
                style={{
                  // borderRadius: "0",
                  borderTopRightRadius: "3rem",
                  borderBottomRightRadius: "0",
                  borderTop: "none",
                }}
              ></div>
              <div className="bookings-cleaning-right">
                <div
                  className="screen-container row"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Form
                    className="form-element-bookings"
                    style={{
                      borderRadius: "0",
                    }}
                    onSubmit={sendCleaningEmail}
                  >
                    <div className="form-header">
                      <h1>Cleaning</h1>
                      <h5>sumbit the form for your same day quote</h5>
                    </div>
                    <Form.Group
                      controlId="exampleForm.ControlInput10"
                      className="form-group"
                    >
                      <Form.Label className="form-label">name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name1"
                        // placeholder="David Keys"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlInput10"
                      className="form-group"
                    >
                      <Form.Label className="form-label">email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email1"
                        // placeholder="name@example.com"
                        className="form-control"
                      />
                    </Form.Group>

                    <Calendar onChange={onChange} value={value} />

                    <Form.Group
                      controlId="exampleForm.ControlSelect10"
                      style={{
                        marginTop: "2%",
                      }}
                      className="form-group"
                    >
                      <div className="checkbox-div">
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              dish_wash: !cleaningCheckState["dish_wash"],
                            })
                          }
                          inline
                          label="Dishes"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-101`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              vacuum: !cleaningCheckState["vacuum"],
                            })
                          }
                          inline
                          label="Hoovering"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-102`}
                          className="form-checkbox-text"
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
                          label="Mop / Sweep"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-103`}
                          className="form-checkbox-text"
                        />

                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              bins: !cleaningCheckState["bins"],
                            })
                          }
                          inline
                          label="Bin Empty"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-104`}
                          className="form-checkbox-text"
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
                          label="Surface Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-105`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              mirror_clean: !cleaningCheckState["mirror_clean"],
                            })
                          }
                          inline
                          label="Mirror Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-106`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              oven_clean: !cleaningCheckState["oven_clean"],
                            })
                          }
                          inline
                          label="Oven Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-107`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fridge_clean: !cleaningCheckState["fridge_clean"],
                            })
                          }
                          inline
                          label="Fridge Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-108`}
                          className="form-checkbox-text"
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
                          label="Cupboard Clean"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-109`}
                          className="form-checkbox-text"
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
                          id={`inline-${"checkbox"}-110`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setCleaningCheckState({
                              ...cleaningCheckState,
                              fold_clothes: !cleaningCheckState["fold_clothes"],
                            })
                          }
                          inline
                          label="Clothe Folding"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-111`}
                          className="form-checkbox-text"
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
                          id={`inline-${"checkbox"}-112`}
                          className="form-checkbox-text"
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

                    {/* <div className="form-footer"> */}
                    <div className="button-wrapper">
                      <Link
                        activeClass="active"
                        to="book-land"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        isDynamic={true}
                        ignoreCancelEvents={true}
                        style={{ width: "100%" }}
                      >
                        <button
                          type="submit"
                          class="btn btn-primary button-home-styles"
                          style={{
                            displaywidth: "100%",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            fontSize: 13,
                            color: "#fff",
                            borderColor: "#fff",
                            borderWidth: "2px",
                            border: "0.17rem solid #fff",
                          }}
                        >
                          BACK
                        </button>
                      </Link>

                      <button
                        class="btn btn-primary button-submit-styles"
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                          backgroundColor: "#fff",
                          color: "#8bc343",
                          fontSize: 13,
                          borderWidth: "0px",
                          border: "0.17rem solid #fff",
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                    {/* </div> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="bookings-gardening" id="book-gard">
        <div
          className="screen-container row"
          style={{
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "-2vh",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 2,
                backgroundColor: "#8bc343",
                flexDirection: "row",
              }}
            >
              <div
                className="garden-left"
                style={{ borderRadius: "0", borderTop: "none" }}
              ></div>
              <div className="bookings-garden-right">
                <div
                  className="screen-container row"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Form
                    className="form-element-bookings"
                    style={{ borderRadius: "0", background: "transparent" }}
                    onSubmit={sendGardeningEmail}
                  >
                    <div className="form-header">
                      <h1>Gardening</h1>
                      <h5>sumbit the form for your same day quote</h5>
                    </div>
                    <Form.Group
                      controlId="exampleForm.ControlInput11"
                      className="form-group space"
                    >
                      <Form.Label className="form-label">name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        // placeholder="David Keys"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlInput11"
                      className="form-group"
                    >
                      <Form.Label className="form-label">email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        // placeholder="name@example.com"
                        className="form-control"
                      />
                    </Form.Group>

                    <Calendar onChange={onChange} value={value} />

                    <Form.Group
                      controlId="exampleForm.ControlSelect11"
                      style={{
                        marginTop: "1%",
                      }}
                      className="form-group"
                    >
                      <div className="checkbox-div">
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              lawnmow: !gardenCheckState["lawnmow"],
                            })
                          }
                          inline
                          label="Lawn Mowing"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-111`}
                          className="form-checkbox-text"
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
                          id={`inline-${"checkbox"}-112`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              gardenCare: !gardenCheckState["gardenCare"],
                            })
                          }
                          inline
                          label="Garden Care"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-113`}
                          className="form-checkbox-text"
                        />

                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              weeding: !gardenCheckState["weeding"],
                            })
                          }
                          inline
                          label="Flower Bed Weeding"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-114`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
                          onChange={() =>
                            setGardenCheckState({
                              ...gardenCheckState,
                              trimming: !gardenCheckState["trimming"],
                            })
                          }
                          inline
                          label="Branch / Bush Trimming"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-115`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
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
                          id={`inline-${"checkbox"}-116`}
                          className="form-checkbox-text"
                        />
                        <Form.Check
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
                          id={`inline-${"checkbox"}-117`}
                          className="form-checkbox-text"
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

                    {/* <div className="form-footer"> */}
                    <div className="button-wrapper">
                      <Link
                        activeClass="active"
                        to="book-land"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        isDynamic={true}
                        ignoreCancelEvents={true}
                        style={{ width: "100%" }}
                      >
                        <button
                          type="submit"
                          class="btn btn-primary button-home-styles"
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                            backgroundColor: "transparent",
                            fontSize: 13,
                            color: "#fff",
                            borderColor: "#fff",
                            borderWidth: "2px",
                            border: "0.17rem solid #fff",
                          }}
                        >
                          BACK
                        </button>
                      </Link>

                      <button
                        class="btn btn-primary button-submit-styles"
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                          backgroundColor: "#fff",
                          color: "#8bc343",
                          fontSize: 13,
                          borderWidth: "0px",
                          border: "0.17rem solid #fff",
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                    {/* </div> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
