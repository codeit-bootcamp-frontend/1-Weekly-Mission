import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import SearchImage from "@/public/images/search.svg";
import CloseImage from "@/public/images/close.svg";

interface SearchbarProps {
  handleSearch: (value: string) => void;
}

const Searchbar = ({ handleSearch }: SearchbarProps) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
    setSearchText(e.target.value);
  };
  const handleSearchDelete = () => {
    handleSearch("");
    setSearchText("");
  };

  return (
    <StyledSearchbarForm>
      <StyledSearchbarInnerBox>
        <label htmlFor="search">
          <SearchImage alt="Search" />
        </label>
        <StyledSearchbarInput
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearchText}
        />
      </StyledSearchbarInnerBox>
      {searchText !== "" && (
        <StyledSearchbarDeleteBox onClick={handleSearchDelete}>
          <CloseImage alt="검색창 지우기" />
        </StyledSearchbarDeleteBox>
      )}
    </StyledSearchbarForm>
  );
};

export default Searchbar;

const StyledSearchbarForm = styled.form`
  display: flex;
  width: 106rem;
  padding: 1.5rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: #f5f5f5;
  transition: 0.5s;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
  }
`;

const StyledSearchbarInnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const StyledSearchbarInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--Text, #666);
  width: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;

  &:active,
  focus {
    border: none;
    outline: none;
  }
`;

const StyledSearchbarDeleteBox = styled.div`
  cursor: pointer;
`;
