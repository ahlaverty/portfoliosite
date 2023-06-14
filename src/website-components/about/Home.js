import React from 'react';
import { Col } from 'react-bootstrap';

import './home.css';

export default function Home() {
    return (
        <Col lg="auto" className="typewriter">
            <p className="heading">Design it.</p>
            <p className="heading">Develop it.</p>
            <p className="heading">Dig it.</p>
        </Col>
    );
}