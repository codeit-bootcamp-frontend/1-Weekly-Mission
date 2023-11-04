import React from "react";
import * as S from "./ButtonStyle";

function Button({ children }) {
  return <S.Button href="signin.html">{children}</S.Button>;
}

export default Button;
