import React from "react";

import Card from "./Card/Card";
import styled from "styled-components";
import { device } from "../style/device";

function CardList({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <CardListContainer>
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: grid;

  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CardList;
