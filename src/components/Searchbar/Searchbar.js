import { useState } from "react";
import searchIcon from "../../assets/Search.png";

import "./Searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);

  const handleSearchDelete = (e) => {
    setSearchText("");
  };

  return (
    <div className="searchbar">
      <div className="searchbar-inner">
        <label htmlFor="search">
          <img src={searchIcon} alt="Search" />
        </label>
        <input
          className="searchbar-input"
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearch}
        />
      </div>
      {searchText !== "" && (
        <div className="searchbar-delete" onClick={handleSearchDelete}>
          X
        </div>
      )}
    </div>
  );
};

export default Searchbar;
