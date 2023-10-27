import React from 'react';
import './Search.css';

const LinkSearch = '링크를 검색해 보세요.';

function Search() {
  return <input className="search-input" placeholder={LinkSearch} />;
}

export default Search;
