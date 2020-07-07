import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './contact.css';

export default function Contact() {
    return(
      <Row>
          <Col>
            <Row className="align-items-end">
                <Col>
                    <h2 className="contact-heading">Email me.</h2>
                </Col>
                <Col lg="auto">
                    <p className="contact">aubrey [dot] laverty [at] gmail [dot] com</p>
                </Col>
            </Row>
          </Col>
      </Row>  
    );
}