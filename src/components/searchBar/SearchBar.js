import styles from "./SearchBar.module.css";
import React from "react";
import searchIcon from "../../assets/images/searchbar.svg";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <img className={styles.search__image} src={searchIcon} alt="icon" />

      <input
        className={styles.search__input}
        type="search"
        placeholder="링크를 검색해 보세요"
      />
    </div>
  );
}
