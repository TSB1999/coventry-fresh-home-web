import React from "react";
import "./styles.css";

import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div className="home-screen-wrapper">
      <Navbar />
      <main>
        <section class="presentation">
          <div class="introduction">
            <div class="intro-text">
              <h1>
                Professional Gardening <br /> and Sanitary Services
              </h1>
              <h3>GET YOUR SAME DAY QUOTE NOW!</h3>
            </div>

            <div class="cta">
              <button class="cta-select">CLEANING</button>
              <button class="cta-add">GARDENING</button>
            </div>
          </div>
          <div class="cover">
            <form>
              <label for="fname">First name:</label>
              <br />
              <input type="text" id="fname" name="fname" />
              <br />
              <label for="lname">Last name:</label>
              <br />
              <input type="text" id="lname" name="lname" />
            </form>
          </div>
        </section>

        <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
        <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
        <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
      </main>
    </div>
  );
}
