import React from "react";
import * as S from "./Button";

function Button({ children }) {
  return <S.Button href="signin.html">{children}</S.Button>;
}

export default Button;
