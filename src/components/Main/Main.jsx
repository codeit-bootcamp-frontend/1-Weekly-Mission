import React from "react";
import * as S from "./MainStyle"; // 새로 생성할 스타일 파일을 가져옴

function Main({ children }) {
  return <S.MainContainer>{children}</S.MainContainer>;
}

export default Main;
