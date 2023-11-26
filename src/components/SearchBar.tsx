import React from "react";
import styled from "styled-components";
import SearchImage from "../assets/Search.png";
import { flexCenter } from "../style/common";

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="링크를 검색해 보세요." />
    </SearchBarContainer>
  );
}

export default SearchBar;

export const SearchBarContainer = styled.div`
  ${flexCenter}
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;
  background-repeat: no-repeat;
  background-image: url(${SearchImage});
  background-position: 17px 19px;
  padding-left: 45px;
`;
