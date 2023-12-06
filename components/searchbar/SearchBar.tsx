import styles from "./SearchBar.module.css";
import React, { useContext } from "react";
import Search from "@/public/images/search.svg";
import SearchContext from "../../contexts/SearchContext";

export default function SearchBar() {
  const { inputValue, handleInputFunc } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <span className={styles.search__image}>
        <Search />
      </span>

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
