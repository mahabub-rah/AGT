import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";
import Sidebar from "./Sidebar";


const Event = () => {
   const items = useLoaderData();
   return (
     <Container>
       <Row>
         <Col lg={8}>
           {items.map((item, idx) => (
             <AllCard item={item} key={idx}></AllCard>
           ))}
         </Col>
         <Col lg={4} className="d-none d-lg-block">
           <Sidebar></Sidebar>
         </Col>
       </Row>
     </Container>
   );
};

export default Event;