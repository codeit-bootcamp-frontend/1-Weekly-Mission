import iconSearch from "../assets/img/icon-search.svg";
import * as Styled from "../style/SearchBar";

function SearchBar({ keyword, searchValue, handleSubmit, handleChange }) {
  return (
    <>
      <Styled.Form onSubmit={handleSubmit}>
        <img src={iconSearch} alt="search" />
        <Styled.Input
          placeholder="링크를 검색해 보세요."
          value={keyword}
          onChange={handleChange}
        />
      </Styled.Form>
      {searchValue && (
        <Styled.TextDiv>
          <Styled.Span>{searchValue}</Styled.Span>으로 검색한 결과입니다.
        </Styled.TextDiv>
      )}
    </>
  );
}

export default SearchBar;
