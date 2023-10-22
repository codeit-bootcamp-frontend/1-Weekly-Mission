import "../styles/SearchBar.css";
import { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <img className="SearchBar__search-icon" src={searchIcon} alt="돋보기 모양 아이콘" />
      <input
        className="SearchBar__input"
        name="search"
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
