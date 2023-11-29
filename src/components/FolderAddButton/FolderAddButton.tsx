import styles from "src/components/FolderAddButton/FolderAddButton.module.css";

function FolderAddButton({ onClick }: OnclickProps) {
  return (
    <button className={styles.folderAdd} onClick={onClick} value="addFolder">
      폴더 추가 +
    </button>
  );
}

export default FolderAddButton;
