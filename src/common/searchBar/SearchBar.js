import styles from "./SearchBar.module.css";
import React, { useContext } from "react";
import searchIcon from "../../assets/images/searchbar.svg";
import SearchContext from "../../contexts/SearchContext";

export default function SearchBar() {
  const { inputValue, handleInputFunc } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <img className={styles.search__image} src={searchIcon} alt="icon" />
      <input
        className={styles.search__input}
        type="search"
        placeholder="링크를 검색해 보세요"
        value={inputValue}
        onChange={handleInputFunc}
      />
    </div>
  );
}
