import "./App.css";

import React, { useState } from "react";

// Navigation
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/navbar";

// Pages
import Home from "./pages/home";
import Bookings from "./pages/bookings";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Payment from "./pages/payment";
import PaymentPortal from "./pages/payment-portal";
import ScrollToTop from "./components/scroll-to-top";

// Stores
import { FreshContext } from "./components/app-content";

function App() {
  const [value, setValue] = useState({});
  return (
    <div className="App">
      <FreshContext.Provider value={{ value, setValue }}>
        <Router>
          <ScrollToTop />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/payment-portal" component={PaymentPortal} />
          </Switch>
        </Router>
      </FreshContext.Provider>
    </div>
  );
}

export default App;
