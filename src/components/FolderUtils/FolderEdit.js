import styles from "./FolderEdit.module.css";
import shareImg from "../../assets/share.svg";
import penImg from "../../assets/pen.svg";
import deleteImg from "../../assets/delete.svg";

const buttonsData = [
  { image: shareImg, text: "공유" },
  { image: penImg, text: "이름 변경" },
  { image: deleteImg, text: "삭제" },
];

const FolderEdit = () => {
  return (
    <div className={styles.folderEdit}>
      {buttonsData.map((button, index) => (
        <button className={styles.button} key={index}>
          <img src={button.image} alt={`${button.text} 이미지`} />
          <p>{button.text}</p>
        </button>
      ))}
    </div>
  );
};

export default FolderEdit;
