import styles from "styles/FolderAddBtn.module.css";
// 폴더추가 버튼 누르면 폴더에 폴더추가 모달 뜨게하기

function FolderAddBtn({ onClick }) {
  function handleFolderAdd() {
    onClick({
      show: true,
      modalTitle: "폴더 추가",
    });
  }

  return (
    <>
      <button className={styles.folderAddBtn} onClick={handleFolderAdd}>
        폴더 추가 +
      </button>
    </>
  );
}

export default FolderAddBtn;
