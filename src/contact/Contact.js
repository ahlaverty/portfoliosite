import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './contact.css';

export default function Contact() {

    const [isHovered, setIsHovered] = useState(false);

    return(
        <Col>
        <Row className="align-items-end">
            <Col>
                <h2 className="contact-heading"><Link className="contact-email" to="mailto:aubrey.laverty@gmail.com">Email me</Link>.</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className="contact-heading">
                    <Link className="contact-linkedin"
                        to="https://www.linkedin.com/in/ahlaverty/"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        Linked
                    <span className="me">{isHovered ? 'in' : 'me'}</span>
                    </Link>.
                </h2>
            </Col>
        </Row>
        </Col>
    );
}