import { useState, ChangeEvent } from "react";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "src/assets/images/search-icon.svg";

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
