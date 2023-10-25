import styles from "styles/modules/search.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <img
        src="assets/images/search.svg"
        alt="reading_glasses"
        className={styles.searchImg}
      />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </div>
  );
}

export default SearchBar;
