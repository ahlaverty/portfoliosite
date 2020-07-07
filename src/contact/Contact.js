import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import  logo from '../images/gmail-icon.png';

import './contact.css';

export default function Contact() {

    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredLI, setIsHoveredLI] = useState(false);

    return(
        <Col>
            <Row className="align-items-end">
                <Col>
                    <h2 className="contact-heading">
                        <a target="_blank" className="contact-email"
                            href="mailto:aubrey.laverty@gmail.com"
                            onMouseEnter={() => setIsHoveredEmail(true)}
                            onMouseLeave={() => setIsHoveredEmail(false)}>
                            Email&nbsp;
                            { isHoveredEmail ? (<span className="gmail-me"><img className="GmailIcon" src={logo}  alt="Gmail Icon" />e</span>) : 'me' }
                        </a>.
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="contact-heading">
                        <a target="_blank" className="contact-linkedin"
                            href="https://www.linkedin.com/in/ahlaverty/"
                            onMouseEnter={() => setIsHoveredLI(true)}
                            onMouseLeave={() => setIsHoveredLI(false)}>
                            { isHoveredLI ? (<span>Linked<span className="me">in</span></span>) : (<span>Link <span className="me">me</span></span>)}
                        </a>.
                    </h2>
                </Col>
            </Row>
        </Col>
    );
}