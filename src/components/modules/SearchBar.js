import React, { useState } from "react";
import Search from "../../images/Search.png";
import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${DeviceSizes.mobile} {
    grid-template-columns: minmax(auto, 32.5rem);
    gap: 2rem;
    position: relative;
    grid-area: searchBar;
  }
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex: 0 1 106rem;
  & input:first-child {
    position: absolute;
    bottom: 50%;
    left: 1.6rem;
    transform: translateY(50%);
  }
  & input:nth-child(2) {
    background-color: var(--button-grey-light);
    outline: none;
    border-radius: 1rem;
    color: #666;
    font-size: 1.6rem;
    padding: 1.5rem 1.6rem 1.5rem 4.1rem;
    border: none;
    width: 100%;
  }
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e) => setSearchValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("검색:", searchValue);
    setSearchValue("");
  };

  return (
    <StyledSearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <input type="image" src={Search} alt="검색" />
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="링크를 검색해 보세요."
        />
      </SearchForm>
    </StyledSearchBar>
  );
};

export default SearchBar;
