import React from "react";
import "./styles.css";

import Navbar from "../../components/navbar";

export default function index() {
  return (
    <div>
      <div className="home-screen-wrapper">
        <Navbar />
        <main>
          <section class="presentation">
            <div class="introduction">
              <div class="intro-text">
                <h1>Professional Gardening and Sanitary Services</h1>
              </div>
              <div class="intro-sub-text">
                <h3>GET YOUR SAME DAY QUOTE NOW!</h3>

                <p>
                  Click one of the options below to recieve your same day quote:{" "}
                  <br />
                  Select Domestic for personal sanitary consulting, and
                  Corporate for office sanitary consulting
                </p>
              </div>
              <div class="cta">
                <button class="cta-select">CLEANING</button>
                <button class="cta-add">GARDENING</button>
              </div>
            </div>
            <div class="cover">
              {/* <!-- <img src="./img/matebook.png" alt="notebook"> --> */}
            </div>
          </section>

          {/* <!-- <div class="laptop-select">
            <img src="./img/arrow-left.svg" alt="">
            <img src="./img/dot.svg" alt="">
            <img src="./img/dot-full.svg" alt="">
            <img src="./img/arrow-right.svg" alt="">
        </div> --> */}

          <img class="big-circle" src="./img/big-eclipse.svg" alt="" />
          <img class="medium-circle" src="./img/mid-eclipse.svg" alt="" />
          <img class="small-circle" src="./img/small-eclipse.svg" alt="" />
        </main>
      </div>
    </div>
  );
}
