import { useState } from 'react';
import searchIcon from '../images/Search.svg';
import styles from './Search.module.css';

function Search() {
  const [searchInputValue, setSearchInputValue] = useState('');

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  return (
    <article className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt="" />
      <form>
        <input
          onChange={handleInputChange}
          value={searchInputValue}
          type="text"
          className={styles.input}
          placeholder="링크를 검색해 보세요"
        ></input>
      </form>
    </article>
  );
}

export default Search;
