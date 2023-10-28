import SearchIMG from "assets/Search.svg";
import * as Styled from "./StyledSearchBar";

const SearchBar = () => {
  return (
    <Styled.Form>
      <label htmlFor="search">
        <img src={SearchIMG} alt="검색 돋보기 이미지" />
      </label>
      <Styled.Input
        id="search"
        name="search"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </Styled.Form>
  );
};

export default SearchBar;
