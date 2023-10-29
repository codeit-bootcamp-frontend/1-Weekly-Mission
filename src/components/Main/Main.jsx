import React from "react";
import * as S from "./MainStyle"; // 새로 생성할 스타일 파일을 가져옴
import SearchBar from "../SearchBar/SearchBar";
import CardList from "../CardList/CardList";

function Main({ links }) {
  return (
    <S.MainContainer>
      <SearchBar />
      <CardList links={links} />
    </S.MainContainer>
  );
}

export default Main;
