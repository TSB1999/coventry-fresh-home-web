import React from "react";
import "./styles.css";

// Components
import Navbar from "../../components/navbar";
import portfolio1 from "./images/instagram/IMG_1333.jpg";
import portfolio2 from "./images/instagram/IMG_1334.jpg";
import portfolio3 from "./images/instagram/IMG_1335.jpg";
import portfolio4 from "./images/instagram/IMG_1336.jpg";
import portfolio5 from "./images/instagram/IMG_1337.jpg";
import portfolio6 from "./images/instagram/IMG_1338.jpg";
import portfolio7 from "./images/instagram/IMG_1340.jpg";

export default function index() {
  return (
    <div className = "gallery-screen-wrapper">
      {/* <Navbar /> */}

      <div className="gallery-items-wrapper">
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio1})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio2})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio3})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio4})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio5})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        <div className="gallery-item-wrapper">
          <div
            className="item-img"
            style={{ backgroundImage: `url(${portfolio6})` }}
          >
            {/* content */}
          </div>
          <div className="item-content-wrapper">
            <h4>
              Aute labore ea cupidatat voluptate consectetur cillum tempor
              cupidatat reprehenderit in minim. Non commodo magna adipisicing
              duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
              anim labore cillum cillum exercitation mollit. Fugiat laborum
              officia commodo ea do occaecat ullamco velit aute eiusmod labore.
            </h4>
          </div>
        </div>
        {/* <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio7})` }}
            >
            </div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim. Non commodo magna adipisicing
                duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
                anim labore cillum cillum exercitation mollit. Fugiat laborum
                officia commodo ea do occaecat ullamco velit aute eiusmod
                labore.
              </h4>
            </div>
          </div> */}
        {/* <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio7})` }}
            >
            </div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim. Non commodo magna adipisicing
                duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
                anim labore cillum cillum exercitation mollit. Fugiat laborum
                officia commodo ea do occaecat ullamco velit aute eiusmod
                labore.
              </h4>
            </div>
          </div> */}
        {/* <div className="gallery-item-wrapper">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${portfolio8})` }}
            >
            </div>
            <div className="item-content-wrapper">
              <h4>
                Aute labore ea cupidatat voluptate consectetur cillum tempor
                cupidatat reprehenderit in minim. Non commodo magna adipisicing
                duis eiusmod adipisicing occaecat laborum do. Nulla enim dolor
                anim labore cillum cillum exercitation mollit. Fugiat laborum
                officia commodo ea do occaecat ullamco velit aute eiusmod
                labore.
              </h4>
            </div>
          </div> */}
      </div>
    </div>
  );
}
