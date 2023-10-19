import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "./assets/search-icon.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("검색어:", searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <img src={SearchIcon} alt="Search" />
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="링크를 검색해 보세요."
        />
      </form>
    </div>
  );
};

export default SearchBar;
