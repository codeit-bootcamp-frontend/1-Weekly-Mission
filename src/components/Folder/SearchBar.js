import "../../styles/SearchBar.css";
import searchIcon from "../../images/Search.svg";
import closeIcon from "../../images/_close.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
function SearchBar({ items, onSearch }) {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const closeSearchBar = () => {
    document.querySelector(".search-bar-wrapper").classList.add("display-off");
  };

  const SearchLink = (links, search) => {
    onSearch(links, search);
  };

  useEffect(() => {
    SearchLink(items, search);
  }, [search]);

  return (
    <>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="링크를 검색해 보세요"
          value={search}
          onChange={(e) => {
            handleChangeSearch(e);
          }}
        />

        <img src={searchIcon} className="search-icon-image" alt=" " />
        <img
          src={closeIcon}
          onClick={() => closeSearchBar()}
          className="close-icon"
          alt=""
        />
      </div>
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
