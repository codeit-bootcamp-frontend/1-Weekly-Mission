import React from 'react';
import searchImage from '../assets/images/icons/Search.png';
import styles from '../styles/Search.module.css';

function Search() {
  return (
    <div className={styles.search__container}>
      <img src={searchImage} className={styles.search__image} />
      <input
        className={styles.search__input}
        placeholder='링크를 검색해 보세요.'
      />
    </div>
  );
}

export default Search;
