import React from 'react';
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";

const Edu = () => {
    const items = useLoaderData();
    return (
      <Container>
        {items.map((item, idx) => (
          <AllCard item={item} key={idx}></AllCard>
        ))}
      </Container>
    );
};

export default Edu;