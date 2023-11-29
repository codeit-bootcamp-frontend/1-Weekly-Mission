import styles from "src/components/LinkAdd/LinkAdd.module.css";

function LinkAdd({ onClick }: OnclickProps) {
  return (
    <div className={styles.introWrapper}>
      <input
        className={styles.linkAddInput}
        placeholder="링크를 추가해 보세요"
      />
      <button className={styles.addButton} onClick={onClick} value="add">
        추가하기
      </button>
    </div>
  );
}

export default LinkAdd;
