/* 검색어를 입력해 seach 하기 위한 인풋 컴포넌트 */

import styles from "./SearchBar.module.css";
import { useState, ChangeEvent } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/images/search-icon.svg";

function SearchBar() {
  const [text, setText] = useState("");
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles["search-form-container"]}>
      <form className={styles["search-form"]}>
        <SearchIcon className={styles["search-icon"]} />
        <input
          className={styles["search-bar"]}
          value={text}
          placeholder="검색어를 입력하세요."
          onChange={handleTitleChange}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
