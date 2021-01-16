// import "./App.css";

// Navigation
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './components/navbar'

// Pages
import Home from "./pages/home";
import Bookings from "./pages/bookings";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
