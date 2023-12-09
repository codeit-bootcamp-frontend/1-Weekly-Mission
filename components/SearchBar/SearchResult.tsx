import { ReactNode } from "react";
import * as Styled from "./SearchBar.styled";

interface Props {
  children: ReactNode;
}

const SearchResult = ({ children }: Props) => {
  return (
    <Styled.SearchResultContainer>
      <Styled.SearchResultSentence>
        <Styled.Stress>{children}</Styled.Stress> 으로 검색한 결과입니다.
      </Styled.SearchResultSentence>
    </Styled.SearchResultContainer>
  );
};

export default SearchResult;
