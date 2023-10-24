import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/icons/SearchIcon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <SearchIcon />
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
