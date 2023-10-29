import React from "react";
import * as S from "./MainStyle"; 

function Main({ children }) {
  return <S.MainContainer>{children}</S.MainContainer>;
}

export default Main;
