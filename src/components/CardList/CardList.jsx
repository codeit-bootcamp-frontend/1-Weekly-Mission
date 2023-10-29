import React from "react";
import * as S from "./CardListStyle";
import Card from "../Card/Card";
import FolderButton from "../../Pages/components/FolderButton/FolderButton";

function CardList({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <S.CardListContainer>
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </S.CardListContainer>
  );
}

export default CardList;
