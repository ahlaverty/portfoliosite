import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './about.css';

export default function About() {
    return (
        <Col>
            <Row>
                <Col>
                    <h1>I am <span className="name">Aubrey H. Laverty</span>, a <span className="role-1">Front End Developer</span> + <span className="role-2">UX/UI Designer</span> based in Chicago looking for a company that will allow me to continue to grow my skillset.</h1>
                </Col>
            </Row>
        </Col>
    );
}