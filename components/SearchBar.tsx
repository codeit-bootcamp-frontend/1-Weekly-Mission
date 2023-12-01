import searchIcon from "../images/Search.svg";
import closeIcon from "../images/_close.svg";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
function SearchBar({ search, onSearch }: any) {
  const [display, setDisplay] = useState(true);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const closeSearchBar = () => {
    setDisplay(false);
  };

  return (
    <>
      <SearchBarWrapper $display={display}>
        <SearchBarInput
          type="text"
          className="search-bar"
          placeholder="링크를 검색해 보세요"
          value={search}
          onChange={handleChangeSearch}
        />

        <SearchIcon>
          <Image width={16} height={16} src={searchIcon} alt=" " />
        </SearchIcon>

        <CloseIcon onClick={() => closeSearchBar()}>
          <Image width={16} height={16} src={closeIcon} alt="" />
        </CloseIcon>
      </SearchBarWrapper>
      {search === "" ? null : (
        <SearchResultContainer>
          <ContentBold>{search}</ContentBold>
          <SearchResultContent>으로 검색한 결과입니다</SearchResultContent>
        </SearchResultContainer>
      )}
    </>
  );
}

export default SearchBar;

const SearchResultContainer = styled.div`
  width: 1060px;
  padding-bottom: 40px;
  margin: 0 auto;
`;

const SearchResultContent = styled.span`
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const ContentBold = styled(SearchResultContent)`
  color: #373740;
`;

const SearchBarInput = styled.input`
  display: flex;
  width: 1060px;
  padding: 15px 42px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  margin: 0 auto;
  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

interface SearchBarWrapperProps {
  $display: boolean;
}

const SearchBarWrapper = styled.div<SearchBarWrapperProps>`
  display: flex;
  position: relative;
  width: 1060px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }

  display: ${({ $display }) => ($display ? "flex" : "none")};
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 15px;
  left: 16px;
  cursor: pointer;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 15px;
  right: 16px;
  cursor: pointer;
`;
