import trashIcon from "../assets/img/trash.svg";
import shareIcon from "../assets/img/share.svg";
import penIcon from "../assets/img/pen.svg";
import style from "./CurrentFolder.module.css";
import clsx from "clsx";
function CurrentFolder({ folderId, folders }) {
  const currentFolder = folders.filter((folder) => folder.id == folderId);
  const folderName = currentFolder.length ? currentFolder[0].name : "전체";
  return (
    <div className={style.root}>
      <div className={style.folderName}>{folderName}</div>
      <div
        className={clsx(style.buttons, {
          [style.hidden]: folderName == "전체",
        })}
      >
        <button>
          <img src={shareIcon} alt="공유하기" />
          공유
        </button>
        <button>
          <img src={penIcon} alt="이름변경하기" />
          이름변경
        </button>
        <button>
          <img src={trashIcon} alt="삭제하기" />
          삭제
        </button>
      </div>
    </div>
  );
}
export default CurrentFolder;
