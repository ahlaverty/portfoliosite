import React from 'react';
import { Col } from 'react-bootstrap';

import './home.css';

export default function Home() {
    return (
        <Col lg="auto" className="typewriter">
            <p className="heading">Develop.</p>
            <p className="heading">Design.</p>
            <p className="heading">Dig.</p>
        </Col>
    );
}