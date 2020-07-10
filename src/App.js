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
import AlbumApp from "./album-app/AlbumApp";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <MainRoute exact path="/" component={Home} />
            <MainRoute exact path="/about" component={About} />
            <MainRoute exact path="/portfolio" component={Portfolio} />
            <MainRoute exact path="/contact" component={Contact} />
            <PortfolioRoute path="/album-app" component={AlbumApp} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export const MainRoute = ({ component: Component, ...rest}) => {
  return(
    <Route {...rest} component={(props) => (
      <>
        <TopNav />
        <Container fluid>
          <Row className="content-row">
            <Component {...props} />
          </Row>
        </Container>
        <Gradient />
      </>
    )} />
  );
};

export const PortfolioRoute = ({ component: Component, ...rest}) => {
  return(
    <Route {...rest} component={(props) => (
      <>
        <Component {...props} />
      </>
    )} />
  );
};

export default App;
