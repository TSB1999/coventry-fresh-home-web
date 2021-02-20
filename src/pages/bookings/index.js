import React, { useEffect } from "react";
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

import image from "./images/clean.jpeg";
import image1 from "./images/garden.jpeg";
import preview from "./images/cdc-wz3ijPHvL54-unsplash.jpg";
import preview1 from "./images/volha-flaxeco-jCPL0oxBhB0-unsplash.jpg";
import small from "./images/small-eclipse.svg";
import medium from "./images/mid-eclipse.svg";
import large from "./images/big-eclipse.svg";

toast.configure();

export default function Index() {
  const [loading, setLoading] = React.useState(false);

  const [cleanHour, setCleanHour] = React.useState(1);
  const [gardenHour, setGardenHour] = React.useState(1);

  return (
    <div className="home-container">
      <div className="screen gallery-landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">
          <div className="bookings-options-container">
            <div className="bookings-content">
              <h1 className="bookings-header">make a booking</h1>
              <h4 className="bookings-sub-header">
                In order to make your booking, please select the service that
                you require below and follow the instructions. We aim to process
                your enquiry and provide you with a quote within the hour.
              </h4>
              <div className="option-1">etg</div>
              <div className="option-2">efw</div>
              <div className="option-3">ewf</div>
            </div>
          </div>
          <div className="workflow">
            <div className="step-1">
              <div className="circle-step">Select your service</div>
            </div>
            <div className="arrow-1">
              <i class="fas fa-arrow-right fa-4x"></i>
            </div>
            <div className="step-2">
              <div className="circle-step">Make an Enquiry</div>
            </div>
            <div className="arrow-2">
              <i class="fas fa-arrow-right fa-4x"></i>
            </div>
            <div className="step-3">
              <div className="circle-step">Sit tight for your quote</div>
            </div>
          </div>
        </div>
      </div>

      <div className="screen gallery-landing">
        <div className="navbar-placeholder" />
        <div className="screen-container column">erf</div>
      </div>
    </div>
  );
}
