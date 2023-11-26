import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/images/searchIcon.svg";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <img
        className={styles.searchIcon}
        src={searchIcon}
        alt="돋보기 모양 아이콘"
      />
      <input
        className={styles.input}
        name="search"
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
