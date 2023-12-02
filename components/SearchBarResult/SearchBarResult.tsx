import styles from "./SearchBarResult.module.css";

interface Props {
  value: string;
}

function SearchBarResult({ value }: Props) {
  return (
    <p className={styles.root}>
      {value}
      <span className={styles.searchResult}>로 검색한 결과입니다</span>
    </p>
  );
}

export default SearchBarResult;
