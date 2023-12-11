import searchImg from "../assets/images/Search.png";
import styles from "styles/Search.module.css";
import Image from "next/image";

function Search() {
  return (
    <form className={styles.searchBar}>
      <Image
        className={styles.searchIcon}
        src={searchImg}
        alt="돋보기 아이콘"
      />
      <input
        className={styles.searchInput}
        placeholder="링크를 검색해 보세요."
      ></input>
    </form>
  );
}

export default Search;
