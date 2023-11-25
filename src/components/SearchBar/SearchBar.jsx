import { useState } from "react";
import SearchIMG from "assets/Search.svg";
import * as Styled from "./StyledSearchBar";

const SearchBar = ({ linksData, setLinksData, originalLinksData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const filteredLinks = linksData.filter((item) => {
      if (
        item["description"]?.includes(inputValue) ||
        item["url"]?.includes(inputValue) ||
        item["title"]?.includes(inputValue)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setLinksData((prevData) => ({
      ...prevData,
      data: filteredLinks,
    }));
  };

  const handleCancelClick = () => {
    setInputValue("");
    const { data: LinkData } = originalLinksData;
    setLinksData((prevData) => ({
      ...prevData,
      data: LinkData,
    }));
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
      <Styled.CloseBtn onClick={handleCancelClick} />
    </Styled.Form>
  );
};

export default SearchBar;
