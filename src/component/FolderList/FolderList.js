import style from "./FolderList.module.css";
import FolderItem from "../FolderItem/FolderItem";
import Modal from "../Modal/Modal";
import { useState } from "react";
function FolderList({ folders }) {
  const [isModal, setIsModal] = useState(false);
  const entireFolder = [{ id: "", name: "전체" }, ...folders];
  const handleClick = () => {
    setIsModal(true);
  };
  const handleExitClick = (isClosed) => {
    setIsModal(!isClosed);
  };
  return (
    <div className={style.root}>
      <div className={style.folders}>
        {entireFolder.map((folder) => (
          <FolderItem key={folder.id} id={folder.id} name={folder.name} />
        ))}
      </div>

      <div>
        <button className={style.addFolderBtn} onClick={handleClick}>
          폴더 추가 +
        </button>
      </div>
      {isModal && (
        <Modal
          title="폴더 추가"
          data="내용 입력"
          onExitClick={handleExitClick}
        />
      )}
    </div>
  );
}
export default FolderList;
