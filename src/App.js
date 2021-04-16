import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Homepage from "./components/Homepage";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <header>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </header>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
