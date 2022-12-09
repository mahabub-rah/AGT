import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Category = () => {
    return (
      <Container>
        <Navbar className='d-none d-md-block py-4' expand="md">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-0">
                <NavLink
                  className="me-2 fs-6 fw-semibold"
                  variant="transparent"
                  to="/allpost"
                >
                  All Post
                </NavLink>
                <NavLink
                  className="me-2 fs-6 fw-semibold"
                  variant="transparent"
                  to="/article"
                >
                  Article
                </NavLink>
                <NavLink
                  className="me-2 fs-6 fw-semibold"
                  variant="transparent"
                  to="/event"
                >
                  Event
                </NavLink>
                <NavLink
                  className="me-2 fs-6 fw-semibold"
                  variant="transparent"
                  to="/education"
                >
                  Education
                </NavLink>
                <NavLink
                  className="me-2 fs-6 fw-semibold"
                  variant="transparent"
                  to="/job"
                >
                  Job
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default Category;