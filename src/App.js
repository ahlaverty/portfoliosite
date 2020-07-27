import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./website-components/nav/TopNav";
import Home from "./website-components/home/Home";
import About from "./website-components/about/About";
//import Portfolio from "./portfolio/Portfolio";
import Contact from "./website-components/contact/Contact";
import Portfolio from "./website-components/portfolio/Portfolio";
import Gradient from "./website-components/gradient/Gradient";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Container fluid>
          <Row className="content-row">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Row>
        </Container>
        <Gradient />
      </div>
    </BrowserRouter>
  );
}

export default App;
