import "../../styles/SearchBar.css";
import searchIcon from "../../images/Search.svg";
import closeIcon from "../../images/_close.svg";
import { useEffect, useState } from "react";

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
  );
}

export default SearchBar;
