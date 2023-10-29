import React from 'react';
import searchImage from '../assets/images/icons/Search.png';
import styles from '../styles/Search.module.css';

function Search() {
  return (
    <div className={styles.root}>
      <form className={styles.container}>
        <img src={searchImage} className={styles.icon} alt='돋보기 아이콘' />
        <input className={styles.input} placeholder='링크를 검색해 보세요.' />
      </form>
    </div>
  );
}

export default Search;
