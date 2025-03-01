import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './about.css';

export default function About() {
    return (
        <Col>
            <Row>
                <Col>
                    <h1 className="about">I am <span className="name">Aubrey H. Laverty</span>, a <span className="role-1">SharePoint Developer</span> + <span className="role-2">Power Platform Developer</span>.</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 class="about">In addition to being a developer, I enjoy making art and volunteering in my spare time.</h2>
                    <h2 class="about">I sit on the Associate Board at <a href="https://www.mercyhome.org">Mercy Home for Boys and Girls</a> based in Chicago, IL. I have been volunteering with the board for several years.</h2>
                </Col>
            </Row>
        </Col>
    );
}