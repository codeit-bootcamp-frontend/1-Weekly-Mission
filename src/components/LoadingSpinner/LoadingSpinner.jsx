import React from "react";
import * as S from "./LoadingSpinner.style";

const LoadingSpinner = () => {
  return (
    <S.SpinnerWrap>
      <S.Spinner />
    </S.SpinnerWrap>
  );
};

export default LoadingSpinner;
