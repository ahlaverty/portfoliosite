import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './nav.css';

export default function TopNav() {
    return (
        <Navbar expand="lg" sticky="top"> 
            <Navbar.Brand href="#home">A.h. Laverty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}