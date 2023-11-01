import { useState } from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/searchIcon.svg";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit}>
      <img className={styles.search_icon} src={searchIcon} alt="돋보기 모양 아이콘" />
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
