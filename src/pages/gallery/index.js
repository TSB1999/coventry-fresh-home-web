import React from "react";
import "./styles.css";

import img1 from "./images/soap-dispenser-2337697_640.jpg";
import img2 from "./images/liana-mikah-WMcitUcSgEg-unsplash.jpg";
import img3 from "./images/lukas-blazek-f-TWhXOrLiU-unsplash.jpg";
import img4 from "./images/hunt-han-4QdIiHPLnfI-unsplash.jpg";

export default function index() {
  return (
    <div className="home-container">
      <div className="screen gallery-landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="gallery-header">
            {/* <h4>select an option</h4> */}
          </div>
          <div className="gallery-grid-container">
            <div className="showcase-grid">
              <button className="bathroom" />
              <button className="bedroom" />
              <button className="kitchen" />
              <button className="garden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
