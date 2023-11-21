import React from 'react';
import searchIcon from '../../assets/shared/Search.svg';
import './searchBar.css';

export default function SearchBar() {
  return (
    <form>
      <div className="search-bar-container">
        <img
          src={searchIcon}
          alt="search-bar-icon"
          className="search-bar-search-icon"
        />
        <input placeholder="링크를 검색해 보세요." className="search-bar" />
      </div>
    </form>
  );
}
