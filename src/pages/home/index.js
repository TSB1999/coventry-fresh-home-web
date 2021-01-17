import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";

import { Link } from "react-scroll";
import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div className="page">
      <div className="home-screen-wrapper" id="home">
        {/* <Navbar /> */}

        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <div className="header-home">
                <h1>
                  Professional Sanitary <br /> and Gardening Services
                </h1>
              </div>
              <div className="sub-header-home">
                <h3>GET YOUR SAME DAY QUOTE NOW!</h3>
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
          <div class="cover"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>

      {/* Screen 2 */}

      <div className="home-screen-wrapper-2" id="gardening">
        <section class="presentation">
          <div class="introduction-2">
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
          <div class="introduction">
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
          <div class="cover"></div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </div>
    </div>
  );
}
