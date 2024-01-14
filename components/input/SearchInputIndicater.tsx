import styles from "./SearchInputIndicater.module.css";

const SearchInputIndicater = ({ searchValue }: { searchValue: string }) => {
  if (searchValue) {
    return (
      <p className={styles.searchResult}>
        {searchValue}
        <span className={styles.searchResult}>로 검색한 결과입니다</span>
      </p>
    );
  }
};

export default SearchInputIndicater;
