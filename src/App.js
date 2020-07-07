import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './nav/TopNav';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

import './styles/default.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" height="100vh">
        <TopNav />
        <Container fluid>
          <Row className="content-row">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            <Route exact path="/contact" component={Contact} />
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
