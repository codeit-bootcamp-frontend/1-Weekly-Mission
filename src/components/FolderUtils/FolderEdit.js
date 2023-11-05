import styles from "./FolderEdit.module.css";
import shareImg from "../../assets/share.svg";
import penImg from "../../assets/pen.svg";
import deleteImg from "../../assets/delete.svg";
import FolderEditButton from "./FolderEditButton";

const buttonsData = [
  { image: shareImg, text: "공유" },
  { image: penImg, text: "이름 변경" },
  { image: deleteImg, text: "삭제" },
];

const FolderEdit = ({ currentFolderName }) => {
  return (
    <div>
      <ul className={styles.folderEdit}>
        {buttonsData.map((button, index) => {
          return (
            <li key={index}>
              <FolderEditButton currentFolderName={currentFolderName} src={button.image} text={button.text} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FolderEdit;
