import React from "react";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import './components/footer.css';
import './App.css';
import Wrapper from './components/Wrapper'
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

function Navbar() {
  return (

    <div>
      <h1 className="title">Cyril G</h1>
      <nav>
      <NavLink to="/" className="nav1"> ABOUT ME </NavLink>    
      <NavLink to="/portfolio" className="nav1"> PORTFOLIO </NavLink>     
      <NavLink to="/contact" className="nav1"> CONTACT ME </NavLink>   
      </nav>
    </div>

  );
}

function App() {
  return (

    <div>
      <Router>
     
        <Wrapper>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
      
        </Wrapper>

      </Router>

      <footer className="footer">
        <span>© Copyright 2021 All Rights Reserved</span>
      </footer>

    </div>

  );
}

export default App;