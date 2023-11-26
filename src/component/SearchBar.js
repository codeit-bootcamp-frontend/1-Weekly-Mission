import iconSearch from "../assets/img/icon-search.svg";
import * as Styled from "../style/SearchBar.js";

function SearchBar({ keyword, handleSubmit, handleChange }) {
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <img src={iconSearch} alt="search" />
      <Styled.Input
        placeholder="링크를 검색해 보세요."
        value={keyword}
        onChange={handleChange}
      />
    </Styled.Form>
  );
}

export default SearchBar;
