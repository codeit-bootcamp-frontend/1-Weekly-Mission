import { ChangeEvent, MouseEvent } from "react";
import closeIcon from "../../assets/images/closeIcon.svg";
import searchIcon from "../../assets/images/Search.svg";
import styles from "./SearchBar.module.css";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function SearchBar({ value, onChange, onClick }: Props) {
  return (
    <article className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt="" />
      <form className={styles.form}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          className={styles.input}
          placeholder="링크를 검색해 보세요"
        ></input>
        {value && (
          <button type="button" onClick={onClick}>
            <img src={closeIcon} alt="" />
          </button>
        )}
      </form>
    </article>
  );
}

export default SearchBar;
