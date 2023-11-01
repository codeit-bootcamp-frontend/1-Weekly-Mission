import styles from "./FolderEdit.module.css";
import shareImg from "../../assets/share.svg";
import penImg from "../../assets/pen.svg";
import deleteImg from "../../assets/delete.svg";

const FolderEdit = () => {
  return (
    <div className={styles.FolderEdit}>
      <button className={styles.button}>
        <img src={shareImg} alt="공유 이미지" />
        <p>공유</p>
      </button>
      <button className={styles.button}>
        <img src={penImg} alt="펜 이미지" />
        <p>이름 변경</p>
      </button>
      <button className={styles.button}>
        <img src={deleteImg} alt="삭제 이미지" />
        <p>삭제</p>
      </button>
    </div>
  );
};

export default FolderEdit;
