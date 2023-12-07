import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";

interface Props {
  searchBar: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setValue: Dispatch<SetStateAction<string>>;
  };
}

function SearchBar({ searchBar }: Props) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    searchBar.setValue("");
  };

  return (
    <>
      <article className={styles.root}>
        <div className={styles.searchIconContainer}>
          <Image fill className={styles.icon} src="/images/icon/common-icons/Search.svg" alt="" />
        </div>
        <form className={styles.form}>
          <input
            onChange={searchBar.onChange}
            value={searchBar.value}
            type="text"
            className={styles.input}
            placeholder="링크를 검색해 보세요"
          ></input>
          {searchBar.value && (
            <button className={styles.closeIconContainer} type="button" onClick={handleClick}>
              <Image fill className={styles.icon} src="/images/icon/common-icons/closeIcon.svg" alt="" />
            </button>
          )}
        </form>
      </article>
      {searchBar.value && (
        <p className={styles.searchResult}>
          {searchBar.value}
          <span className={styles.searchResult}>로 검색한 결과입니다</span>
        </p>
      )}
    </>
  );
}

export default SearchBar;
