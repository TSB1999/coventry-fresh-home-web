import React, { useEffect, useState } from "react";
import "./styles.css";

import Navbar from "../../components/navbar";

import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";

import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import emailjs from "emailjs-com";

import landing1 from "./images/cdc-cdfv65CldQQ-unsplash.jpg";
import landing2 from "./images/cdc-wz3ijPHvL54-unsplash.jpg";
import landing3 from "./images/anton-SnKfmC1I9fU-unsplash.jpg";

import customer_service from "./images/image.png";
import health_safety from "./images/mika-baumeister-uz_T7h8ds04-unsplash.jpg";
import reliable from "./images/cytonn-photography-n95VMLxqM2I-unsplash.jpg";
import diligence from "./images/austrian-national-library-t5qnrCVkUz8-unsplash.jpg";

export default function Home() {
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

  const [cleanLoading, setCleanLoading] = useState(false);
  const [gardenLoading, setGardenLoading] = useState(false);

  useEffect(() => {
    console.log(cleaningCheckState);
  }, [cleaningCheckState]);

  function sendGardeningEmail(e) {
    e.preventDefault();
    console.log(e.target, "vbreou");
    setGardenLoading(true);
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
          setGardenLoading(false);
          Scroll.animateScroll.scrollToTop();
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
    setCleanLoading(true);
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
          setCleanLoading(false);
          // alert and scroll to top
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div
      id="home-landing"
      style={{
        backgroundColor: "#3ab34a",
      }}
    >
      <Navbar />
      <div className="first-screen landing">
        <div className="first-screen-container column">
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "-2vh",
              flexDirection: "column",
            }}
          >
            <div
              className="landing-top"
              style={{
                background: `linear-gradient(
                  rgba(0,0,0,0.5),
                  rgba(99, 108, 89, 0.8) ) ,
                  url(${landing1})`,
                backgroundPosition: "50% 35%",
                backgroundSize: "cover",
              }}
            >
              <div className="landing-background">
                <div className="landing-title-container">
                  <h1>Domestic Cleaning and Gardening Services</h1>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "2rem",
                    }}
                  >
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
                      <button
                        className="landing-button"
                        style={{
                          textShadow: "0.1rem 0.1rem #292929",
                          // borderRadius: "0.3rem",
                          borderTopLeftRadius: "0.3rem",
                          borderBottomLeftRadius: "0.3rem",
                          border: "0.17rem  solid #fff",
                        }}
                      >
                        cleaning
                      </button>
                    </Link>
                    <Link
                      className="scroll-link info-button"
                      activeClass="active"
                      to="info-page"
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
                        className="landing-button"
                        style={{
                          backgroundColor: "#fff",
                          color: "#292929",
                          // textShadow: "0.1rem 0.1rem #292929",
                          // borderRadius: "0.3rem",
                          border: "0.17rem  solid #fff",
                        }}
                      >
                        info
                      </button>
                    </Link>
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
                      <button
                        className="landing-button"
                        style={{
                          backgroundColor: "#8bc343",
                          color: "#fff",
                          textShadow: "0.1rem 0.1rem #292929",
                          // borderRadius: "0.3rem",
                          borderTopRightRadius: "0.3rem",
                          borderBottomRightRadius: "0.3rem",
                          border: "0.17rem  solid #fff",
                        }}
                      >
                        gardening
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-bottom">
              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${customer_service})`,
                    backgroundColor: "teal",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>Terrific Customer Service</h4>
                </div>
                <div className="panel__footer">
                  Anim incididunt dolor qui consectetur dolor commodo id ullamco
                  incididunt ullamco enim ullamco.
                </div>
              </div>
              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${health_safety})`,
                    backgroundColor: "green",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>Health & Safety Conscious</h4>
                </div>
                <div className="panel__footer">
                  Anim incididunt dolor qui consectetur dolor commodo id ullamco
                  incididunt ullamco enim ullamco.
                </div>
              </div>
              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${reliable})`,
                    backgroundColor: "orange",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>Highly Reliable</h4>
                </div>
                <div className="panel__footer">
                  Anim incididunt dolor qui consectetur dolor commodo id ullamco
                  incididunt ullamco enim ullamco.
                </div>
              </div>
              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${diligence})`,
                    backgroundPosition: "50% 20%",
                    backgroundColor: "blue",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>Diligent in Work</h4>
                </div>
                <div className="panel__footer">
                  Anim incididunt dolor qui consectetur dolor commodo id ullamco
                  incididunt ullamco enim ullamco.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="screen about" id="info-page">
        <div className="screen-container">
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "-2vh",
            }}
          >
            <div className="side-panel">
              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${landing3})`,
                    backgroundPosition: "50% 20%",
                    borderRadius: "2rem",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>CLEANING</h4>
                </div>
                <div className="panel__footer">
                  <button
                    className="landing-button"
                    style={{
                      backgroundColor: "#8bc343",
                      color: "#3ab34a",
                      // height: "auto",
                      textShadow: "0.05rem 0.05rem #292929",
                      borderTopRightRadius: "0.3rem",
                      borderBottomRightRadius: "0.3rem",
                      borderRight: "0.3rem solid #3ab34a",
                      borderTop: "0.3rem solid #3ab34a",
                      borderBottom: "0.3rem solid #3ab34a",
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="panel">
                <div
                  className="panel__header"
                  style={{
                    backgroundImage: `url(${landing2})`,
                    backgroundPosition: "50% 20%",
                    borderRadius: "2rem",
                  }}
                ></div>
                <div className="panel__body">
                  <h4>GARDENING</h4>
                </div>
                <div className="panel__footer">
                  <button
                    className="landing-button"
                    style={{
                      backgroundColor: "#8bc343",
                      color: "#3ab34a",
                      textShadow: "0.05rem 0.05rem #292929",
                      borderTopRightRadius: "0.3rem",
                      borderBottomRightRadius: "0.3rem",
                      borderRight: "0.3rem solid #3ab34a",
                      borderTop: "0.3rem solid #3ab34a",
                      borderBottom: "0.3rem solid #3ab34a",
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="big-green"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="screen cleaning" id="home-clean">
        <div className="screen-container">
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
                background:
                  "linear-gradient(180deg, rgba(139,195,67,1) 0%, rgba(58,179,74,1) 93%)",
                flexDirection: "row",
              }}
            >
              <div className="cleaning-left"></div>
              <div
                className="cleaning-right"
                style={{
                  flexDirection: "row",
                  background: "rgb(139,195,67)",
                  background:
                    "linear-gradient(180deg, rgba(139,195,67,1) 0%, rgba(58,179,74,1) 93%)",
                }}
              >
                <div className="right-inner-wrapper">
                  <Form
                    className="form-element"
                    onSubmit={(e) => sendCleaningEmail(e)}
                  >
                    <div className="form-header">
                      <h1>Cleaning</h1>
                      <h5>sumbit the form for your same day quote</h5>
                    </div>
                    <Form.Group
                      controlId="exampleForm.ControlInput1"
                      className="form-group"
                    >
                      <Form.Label className="form-label">name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name1"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlInput1"
                      className="form-group"
                    >
                      <Form.Label className="form-label">email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email1"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlSelect1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Form.Label className="form-label select-display">
                        select
                      </Form.Label>
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
                          id={`inline-${"checkbox"}-1`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          label="Mop / Sweep "
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-3`}
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
                          label="Bin empty"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                    <div className="form-footer">
                      <div className="button-wrapper">
                        <Link
                          activeClass="active"
                          to="home-landing"
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
                            class="btn btn-primary"
                            style={{
                              width: "100%",
                              fontWeight: "bold",
                              backgroundColor: "transparent",
                              fontSize: 13,
                              color: "#fff",
                              borderColor: "#fff",
                              borderWidth: "2px",
                              border: "0.17rem solid #fff",
                              borderRadius: "0",
                            }}
                          >
                            BACK
                          </button>
                        </Link>

                        <button
                          class="btn btn-primary"
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                            backgroundColor: "#fff",
                            color: "#8bc343",
                            fontSize: 13,
                            borderWidth: "0px",
                            border: "0.17rem solid #fff",
                            borderRadius: "0",
                          }}
                        >
                          {cleanLoading && (
                            <Spinner
                              animation="border"
                              role="status"
                              style={{ height: "1rem", width: "1rem" }}
                            >
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                          )}
                          {!cleanLoading && <text>SUBMIT</text>}
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>

                <div className="cleaning-right-right"></div>
              </div>
            </div>
            <div className="workflow workflow-bk"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="screen gardening" id="home-gard">
        <div className="screen-container">
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
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <div className="garden-left"></div>
              <div
                className="garden-right"
                style={{
                  flexDirection: "row",
                  background: "rgba(58,179,74,1)",
                  background:
                    "linear-gradient(180deg, rgba(58,179,74,1) 0%, rgba(139,195,67,1) 93%)",
                }}
              >
                <div className="right-inner-wrapper">
                  <Form
                    className="form-element"
                    onSubmit={(e) => sendGardeningEmail(e)}
                  >
                    <div className="form-header">
                      <h1>Gardening</h1>
                      <h5>sumbit the form for your same day quote</h5>
                    </div>
                    <Form.Group
                      controlId="exampleForm.ControlInput2"
                      className="form-group"
                    >
                      <Form.Label className="form-label">name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlInput2"
                      className="form-group"
                    >
                      <Form.Label className="form-label">email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        className="form-control"
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="exampleForm.ControlSelect2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Form.Label className="form-label select-display">
                        select
                      </Form.Label>
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
                          id={`inline-${"checkbox"}-1`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-3`}
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
                          label="Flower Bed / Plant Weeding"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-1`}
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
                          label="Tree Branch / Bush Trimming"
                          type={"checkbox"}
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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
                          id={`inline-${"checkbox"}-2`}
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

                    <div
                      className="form-footer"
                      // style={{ backgroundColor: "yellow" }}
                    >
                      <div className="button-wrapper">
                        <Link
                          activeClass="active"
                          to="home-landing"
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
                            class="btn btn-primary"
                            style={{
                              width: "100%",
                              fontWeight: "bold",
                              backgroundColor: "transparent",
                              fontSize: 13,
                              color: "#fff",
                              borderColor: "#fff",
                              borderWidth: "2px",
                              border: "0.17rem solid #fff",
                              borderRadius: "0",
                            }}
                          >
                            BACK
                          </button>
                        </Link>

                        <button
                          class="btn btn-primary"
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                            backgroundColor: "#fff",
                            color: "#8bc343",
                            fontSize: 13,
                            borderWidth: "0px",
                            border: "0.17rem solid #fff",
                            borderRadius: "0",
                          }}
                        >
                          {gardenLoading && (
                            <Spinner
                              animation="border"
                              role="status"
                              style={{ height: "1rem", width: "1rem" }}
                            >
                              <span className="sr-only">Loading...</span>
                            </Spinner>
                          )}
                          {!gardenLoading && <text>SUBMIT</text>}
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="garden-right-right"></div>
              </div>
            </div>
            <div
              className="footer-banner"
              style={{
                flex: 0.7,
                backgroundColor: "#3ab34a",
                padding: "1rem",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
