import "../styles/searchBar.css";
import "../styles/reset.css";
import { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
function SearchBar() {
  const [text, setText] = useState("");
  const handleTitleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="search-form">
      <img className="search-icon" src={searchIcon} alt="search icon" />
      <input
        className="search-bar"
        value={text}
        placeholder="검색어를 입력하세요."
        onChange={handleTitleChange}
      ></input>
    </form>
  );
}

export default SearchBar;
