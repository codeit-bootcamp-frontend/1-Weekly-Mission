import style from "./FolderList.module.css";
import FolderItem from "../FolderItem/FolderItem";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Folder } from "../Modal/AddLinkModal";

interface FolderListProps {
  folders: Pick<Folder, "id" | "name">[];
}

function FolderList({ folders }: FolderListProps) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const entireFolder = [{ id: "", name: "전체" }, ...folders];
  const handleClick = () => {
    setIsModal(true);
  };
  const handleExitClick = () => {
    setIsModal(false);
  };
  return (
    <div className={style.root}>
      <div className={style.folders}>
        {entireFolder.map((folder) => (
          <FolderItem
            key={folder.id}
            id={String(folder.id)}
            name={folder.name}
          />
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
