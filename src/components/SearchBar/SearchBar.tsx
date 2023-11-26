import closeIcon from "../../assets/images/closeIcon.svg";
import searchIcon from "../../assets/images/Search.svg";
import styles from "./SearchBar.module.css";
import useInputController from "../../hooks/useInputController";
import { MouseEvent } from "react";

function SearchBar() {
  const searchInput = useInputController({});

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchInput.setValues("");
  };

  return (
    <article className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt="" />
      <form className={styles.form}>
        <input
          onChange={searchInput.handleChange}
          value={searchInput.values}
          type="text"
          className={styles.input}
          placeholder="링크를 검색해 보세요"
        ></input>
        {searchInput.values && (
          <button type="button" onClick={handleClick}>
            <img src={closeIcon} alt="" />
          </button>
        )}
      </form>
    </article>
  );
}

export default SearchBar;
