import { useState } from 'react';
import searchIcon from '../images/Search.svg';
import './Search.css';

function Search() {
  const [searchInputValue, setSearchInputValue] = useState('');

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  return (
    <article className="search">
      <img className="search__icon" src={searchIcon} alt="" />
      <form>
        <input
          onChange={handleInputChange}
          value={searchInputValue}
          type="text"
          className="search__input"
          placeholder="링크를 검색해 보세요"
        ></input>
      </form>
    </article>
  );
}

export default Search;
