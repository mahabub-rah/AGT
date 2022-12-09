import React from "react";
import { Button, } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="text-end d-md-none pt-3 pe-4">
        <Button variant="outline-light" >Join Group</Button>
      </div>
      <div className="container text-white text-section">
        <h1 className="fs-lg-1 fs-md-2 fs-sm-4 mb-0">Computer Engineering</h1>
        <p>142,765 Computer Engineers Follow this</p>
      </div>
    </div>
  );
};

export default Banner;
