import styles from "./FolderMaker.module.scss";

function FolderMaker() {
  return (
    <div className={styles["container"]}>
      <button className={styles["folder-maker-button"]}>폴더 추가 +</button>
    </div>
  );
}

export default FolderMaker;
