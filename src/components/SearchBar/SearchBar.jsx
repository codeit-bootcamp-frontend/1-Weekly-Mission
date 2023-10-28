import SearchIMG from "assets/Search.svg";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="search">
        <img src={SearchIMG} alt="검색 돋보기 이미지" />
      </label>
      <input
        id="search"
        name="search"
        type="text"
        className={styles.input}
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};

export default SearchBar;
