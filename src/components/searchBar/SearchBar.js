import React from 'react';
import searchIcon from '../../assets/shared/Search.svg';
import './searchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-left-box">
        <img src={searchIcon} alt="search" className="search-bar-search-icon" />
        <span className="search-bar-placeholder">링크를 검색해 보세요</span>
      </div>
      <div className="search-bar-cancel-button">x</div>
    </div>
  );
}
