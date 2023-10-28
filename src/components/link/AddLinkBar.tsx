import styles from "styles/modules/addLinkBar.module.css";

function AddLinkBar() {
  return (
    <div className={styles.wrapper}>
      <span>🔗</span>
      <input
        type="text"
        placeholder="링크를 추가해 보세요"
        className={styles.input}
      />
      <button className={styles.addBtn}>추가하기</button>
    </div>
  );
}
export default AddLinkBar;
