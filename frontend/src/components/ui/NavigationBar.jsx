import React from 'react';
import { Container, NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import logout from '../auth/logout';

import './NavigationBar.css';

/**
 * Navigation Bar UI Component
 * @param {object} root0 Object containing the props
 * @param {boolean} root0.isAuth isAuth prop to check authetication for a route
 * @returns {React.ReactHTMLElement} Returns the HTML element
 */
export default function NavigationBar({ isAuth }) {
  return (
    <>
      <Navbar
        bg="customBlue"
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        fixed="top">
        <Container>
          <Navbar.Brand href="/">Notebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            {/* Non Auth Links */}
            {isAuth === false &&
              <Nav className='ms-auto'>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            }
            {/* Auth Links */}
            {isAuth === true &&
              <Nav className='ms-auto'>
                <NavDropdown
                  id="nav-dropdown"
                  title="Account"
                  menuVariant="dark">
                  <NavDropdown.Item href="/dashboard">Notes</NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavigationBar.propTypes = {
  isAuth: PropTypes.boolean,
};
