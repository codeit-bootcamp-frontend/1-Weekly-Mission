import React from "react";
import * as S from "./ErrorPage.style";
import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
  return (
    <S.ErrorPage>
      뭔가 잘못됐습니다.{message}
      <Link to="/">홈으로 돌아가기</Link>
    </S.ErrorPage>
  );
};

export default ErrorPage;
