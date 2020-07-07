import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './nav.css';

export default function TopNav() {
    return (
        <Navbar expand="lg" sticky="top"> 
            <Navbar.Brand href="/">A.h. Laverty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        {/* <Link className="nav-link" activeClassName="active" to="/portfolio">Portfolio</Link> */}
                        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}