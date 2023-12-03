import styles from "./searchLinkInput.module.css";
import searchImg from "/public/image/Search.svg";
import Image from "next/image";

export function SearchLinkInput() {
  return (
    <div className={styles.div_searchLink}>
      <input
        className={styles.div_searchLink_input}
        placeholder="링크를 검색해 보세요"
      />
      <Image
        className={styles.div_searchLink_image}
        alt="search icon"
        src={searchImg}
      />
    </div>
  );
}
