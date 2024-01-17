import styles from "./FolderEdit.module.css";
import shareImg from "../../assets/images/share.svg";
import penImg from "../../assets/images/pen.svg";
import deleteImg from "../../assets/images/delete.svg";
import FolderEditButton from "./FolderEditButton";
import { Dispatch, SetStateAction } from "react";

interface Props {
  currentFolderName: string;
  setCurrentFolderName: Dispatch<SetStateAction<string>>;
}

const buttonsData = [
  { image: shareImg, text: "공유" },
  { image: penImg, text: "이름 변경" },
  { image: deleteImg, text: "삭제" },
];

function FolderEdit({ currentFolderName, setCurrentFolderName }: Props) {
  return (
    <div>
      <ul className={styles.folderEdit}>
        {buttonsData.map((button, index) => {
          return (
            <li key={index}>
              <FolderEditButton
                currentFolderName={currentFolderName}
                setCurrentFolderName={setCurrentFolderName}
                src={button.image}
                text={button.text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FolderEdit;
