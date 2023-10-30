import { useState } from "react";
import SearchIMG from "assets/Search.svg";
import * as Styled from "./StyledSearchBar";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <Styled.Form onSubmit={handleFormSubmit}>
      <label htmlFor="search">
        <img src={SearchIMG} alt="검색 돋보기 이미지" />
      </label>
      <Styled.Input
        id="search"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="링크를 검색해 보세요."
      />
    </Styled.Form>
  );
};

export default SearchBar;
