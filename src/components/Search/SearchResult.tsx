import React from "react";
import { ResultSearchProps } from "src/types/Props";
import { styled } from "styled-components";

function SearchResult({ result }: ResultSearchProps) {
  return (
    <StyledWrapper>
      <StyledResult>{result}</StyledResult>
      <StyledContent>으로 검색한 결과입니다.</StyledContent>
    </StyledWrapper>
  );
}

export default SearchResult;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledResult = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: var(--gray37);
`;
const StyledContent = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: var(--gray9F);
`;
