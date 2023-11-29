import styles from "src/components/FunctionButton/FunctionButton.module.css";

function FunctionButton({ onClick }: OnclickProps) {
  return (
    <div className={styles.functionButtonWrapper}>
      <button className={styles.shareButton} onClick={onClick} value="share">
        공유
      </button>
      <button className={styles.nameButton} onClick={onClick} value="edit">
        이름 변경
      </button>
      <button className={styles.deleteButton} onClick={onClick} value="delete">
        삭제
      </button>
    </div>
  );
}

export default FunctionButton;
