import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  ButtonGroup,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import "./Shared.css";

const Category = () => {
  return (
    <Container>
      <Navbar className="d-none d-md-block py-4" expand="md">
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
              <Dropdown className="me-2 mx-auto">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Write a Post
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-category">
                  <NavLink>
                    <Dropdown.Item as="button">Report a Post</Dropdown.Item>
                  </NavLink>
                  <NavLink>
                    <Dropdown.Item as="button">Update Post</Dropdown.Item>
                  </NavLink>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="primary"><BsFillPeopleFill/> Join Group</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* navbar for mobile device */}
      <div className="d-flex justify-content-between align-items-center mt-3 d-md-none">
        <h3>Post(368)</h3>
        <Dropdown as={ButtonGroup}>
          <Button variant="light">Filter : All</Button>

          <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

          <Dropdown.Menu className="dropdown-category">
            <NavLink to="/allpost">
              <Dropdown.Item as="button">All Post</Dropdown.Item>
            </NavLink>
            <NavLink to="/article">
              <Dropdown.Item as="button">Article</Dropdown.Item>
            </NavLink>
            <NavLink to="/event">
              <Dropdown.Item as="button">Event</Dropdown.Item>
            </NavLink>
            <NavLink to="/education">
              <Dropdown.Item as="button">Education</Dropdown.Item>
            </NavLink>
            <NavLink to="/job">
              <Dropdown.Item as="button">Job</Dropdown.Item>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};

export default Category;
