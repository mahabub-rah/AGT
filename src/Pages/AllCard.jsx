import React from "react";
import { Button, Card, Container, Dropdown, Image } from "react-bootstrap";
import { BsCalendarEvent, BsShareFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import "./Pages.css";

const AllCard = ({ item }) => {
  const {
    image,
    heading,
    category,
    details,
    time,
    location,
    company,
    authorImage,
    authorName,
  } = item;
  return (
    <Container>
      <Card className="my-4">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {category === "Article" && <h5 className="mt-1 mb-3">✍️ Article</h5>}
          {category === "Education" && (  <h5 className="mt-1 mb-3"> 🔬️ Education</h5>)}
          {category === "Meetup" && <h5 className="mt-1 mb-3"> 🗓️ Meetup</h5>}
          {category === "Job" && <h5 className="mt-1 mb-3"> 💼️ Job</h5>}
          <Card.Title className="d-flex justify-content-between align-items-center fs-3 fw-bold">
            <div>{heading}</div>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="card-drop"
                >
                  <HiDotsHorizontal />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>
                    Report
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Hide 
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Title>
          <Card.Text>
            <p>{details.split("", 70)}..</p>
            {category === "Meetup" && (
              <>
                <div className="fw-semibold d-flex justify-content-around align-items-center ">
                  <div className="d-flex align-items-center">
                    <BsCalendarEvent className="me-2" />
                    <p className="p-0 m-0">{time}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoLocationOutline className="me-2" />
                    <p className="p-0 m-0">{location}</p>
                  </div>
                </div>
                <Button
                  variant="outline-light"
                  className="w-100 text-danger mt-4 border border-2 fw-bold "
                >
                  Visit Website
                </Button>
              </>
            )}
            {category === "Job" && (
              <>
                <div className="fw-semibold d-flex justify-content-around align-items-center ">
                  <div className="d-flex align-items-center">
                    <BsCalendarEvent className="me-2" />
                    <p className="p-0 m-0">{company}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoLocationOutline className="me-2" />
                    <p className="p-0 m-0">{location}</p>
                  </div>
                </div>
                <Button
                  variant="outline-light"
                  className="w-100 text-success mt-4 border border-2 fw-bold "
                >
                  Apply on Timesjobs
                </Button>
              </>
            )}
            <div className="mt-5 mb-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image
                  src={authorImage}
                  roundedCircle
                  width="40px"
                  height="40px"
                  className="me-2"
                />
                <h4 className="p-0 m-0">{authorName}</h4>
              </div>
              <Button variant="light">
                <BsShareFill />
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AllCard;
