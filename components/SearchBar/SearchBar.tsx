import { ChangeEvent, MouseEvent } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function SearchBar({ value, onChange, onClick }: Props) {
  return (
    <article className={styles.root}>
      <div className={styles.searchIconContainer}>
        <Image fill className={styles.icon} src="/images/icon/common-icons/Search.svg" alt="" />
      </div>
      <form className={styles.form}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          className={styles.input}
          placeholder="링크를 검색해 보세요"
        ></input>
        {value && (
          <button className={styles.closeIconContainer} type="button" onClick={onClick}>
            <Image fill className={styles.icon} src="/images/icon/common-icons/closeIcon.svg" alt="" />
          </button>
        )}
      </form>
    </article>
  );
}

export default SearchBar;
