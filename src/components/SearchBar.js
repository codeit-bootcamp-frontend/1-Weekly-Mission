import searchIcon from "../images/Search.svg";
import closeIcon from "../images/_close.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
function SearchBar({ items, onSearch }) {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(true);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const closeSearchBar = () => {
    setDisplay(false);
  };

  const SearchLink = (links, search) => {
    onSearch(links, search);
  };

  useEffect(() => {
    SearchLink(items, search);
  }, [search]);

  return (
    <>
      <SearchBarWrapper $display={display}>
        <SearchBarInput
          type="text"
          className="search-bar"
          placeholder="링크를 검색해 보세요"
          value={search}
          onChange={(e) => {
            handleChangeSearch(e);
          }}
        />

        <SearchIcon src={searchIcon} className="search-icon-image" alt=" " />
        <CloseIcon
          src={closeIcon}
          onClick={() => closeSearchBar()}
          className="close-icon"
          alt=""
        />
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

const SearchBarWrapper = styled.div`
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

const SearchIcon = styled.img`
  position: absolute;
  top: 15px;
  left: 16px;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 16px;
  cursor: pointer;
`;
