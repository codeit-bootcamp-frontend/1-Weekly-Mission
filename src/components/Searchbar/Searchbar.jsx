import { useState } from "react";

import IMAGES from "../../assets/images.js";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchDelete = (e) => {
    setSearchText("");
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbarInner}>
        <label htmlFor="search">
          <img src={IMAGES.search} alt="Search" />
        </label>
        <input
          className={styles.searchbarInput}
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearch}
        />
      </div>
      {searchText !== "" && (
        <div className={styles.searchbarDelete} onClick={handleSearchDelete}>
          X
        </div>
      )}
    </div>
  );
};

export default Searchbar;
