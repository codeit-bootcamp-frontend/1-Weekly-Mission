import { SearchProps } from "src/types/Props";
import "./Search.css";
import React from "react";
import { styled } from "styled-components";
import close from "../../assets/images/close.png";

function Search({ value, searchResult }: SearchProps) {
  const handleResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchResult(e.target.value);
  };
  const handleDelete = () => {
    searchResult("");
  };
  return (
    <StyledWrapper>
      <input
        className="search-input"
        placeholder={"링크를 검색해 보세요."}
        onChange={handleResult}
        value={value}
      />
      {value.length > 0 && <StyledDeleteButton onClick={handleDelete} />}
    </StyledWrapper>
  );
}

export default Search;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url(${close});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 12px;
  right: 16px;
`;
