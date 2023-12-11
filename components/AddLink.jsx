import styles from "styles/AddLink.module.css";

//  링크 입력 후 추가하기 버튼 누르면 '폴더에 추가하기'모달 뜨게하기
function AddLink() {
  return (
    <form className={styles.linkAddForm}>
      <label className={styles.linkAddLabel}>
        <input
          className={styles.linkAdd}
          placeholder="링크를 추가해 보세요"
          name="addLinkName"
        />
        <button className={styles.linkAddButton} href="/">
          추가하기
        </button>
      </label>
    </form>
  );
}

export default AddLink;
