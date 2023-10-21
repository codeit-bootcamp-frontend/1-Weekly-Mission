import { useState } from "react";
import searchIcon from "../images/icon/search.svg";
import "./SearchBar.css";

function SearchBar() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <input className="search-input" value={value} onChange={handleValueChange} placeholder="링크를 검색해 보세요." />
        <img className="search-icon" src={searchIcon} alt="검색 아이콘" />
      </form>
    </div>
  );
}

export default SearchBar;
