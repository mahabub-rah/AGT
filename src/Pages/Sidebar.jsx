import React, { useContext } from "react";
import { UserAuth } from "../Auth/AuthContext";
import { BsPencilFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { Button, Form, Image } from "react-bootstrap";
import man from '../assests/man.png'
import "./Pages.css";


const Sidebar = () => {
  const { user } = useContext(UserAuth);
  return (
    <>
      {!user ? (
        <Form>
          <div className="d-flex align-items-center justify-content-between">
            <ImLocation className="me-2 p-0 m-0 fs-5" />
            <input
              type="text"
              placeholder="Set you location?"
              className="w-75 border border-0 p-0 m-0"
            />
            <Button
              type="submit"
              variant="transparent"
              className="searchButton p-0 m-0 fs-5"
            >
              <BsPencilFill />
            </Button>
          </div>
          <hr className="m-2" />
          <Form.Text className="text-muted d-flex justify-content-between mt-3">
            <BiErrorCircle className="me-2  fs-4" />
            <p>
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </Form.Text>
        </Form>
      ) : (
        <>
          <Form>
            <div class="d-flex align-items-center justify-content-between">
              <ImLocation className="me-2 p-0 m-0 fs-5" />
              <input
                type="text"
                placeholder="Set you location?"
                className="w-75 border border-0 p-0 m-0"
              />
              <Button
                type="submit"
                variant="transparent"
                className="searchButton p-0 m-0 fs-5"
              >
                <BsPencilFill />
              </Button>
            </div>
            <hr className="m-0" />
            <Form.Text className="text-muted d-flex justify-content-between mt-3">
              <BiErrorCircle className="me-2  fs-4" />
              <p>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </Form.Text>
          </Form>
          <div className="mt-5">
            <h4 className="text-center"><AiFillLike/> Recommended Groups</h4>
            <div className="px-3 mx-auto">
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <Image src={man}></Image>
                  <h5 className="p-0 m-0 ms-2">Leisure</h5>
                </div>
                <Button variant="light rounded-pill">Follow</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <Image src={man}></Image>
                  <h5 className="p-0 m-0 ms-2">Activism</h5>
                </div>
                <Button variant="light rounded-pill">Follow</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <Image src={man}></Image>
                  <h5 className="p-0 m-0 ms-2">MBA</h5>
                </div>
                <Button variant="light rounded-pill">Follow</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <Image src={man}></Image>
                  <h5 className="p-0 m-0 ms-2">Philosophy</h5>
                </div>
                <Button variant="light rounded-pill">Follow</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
<h1>Hello</h1>;
