import React from "react";
import "../styles/search.css";
import searchImg from "../assets/images/search.svg";

function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <img className="search__icon" src={searchImg} alt="" />
        <input className="search__form" placeholder="링크를 검색해 보세요" />
      </div>
    </div>
  );
}

export default Search;
