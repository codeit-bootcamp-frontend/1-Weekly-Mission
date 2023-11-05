import trashIcon from "../assets/img/trash.svg";
import shareIcon from "../assets/img/share.svg";
import penIcon from "../assets/img/pen.svg";
import style from "./CurrentFolder.module.css";
import clsx from "clsx";
import { useState } from "react";
import Modal from "./Modal";
function CurrentFolder({ folderId, folders }) {
  const [isChangeNameModal, setIsChanageNameModal] = useState(false);
  const [isDeleteModal, setIsDeleteNameModal] = useState(false);

  const handleChangeNameClick = () => {
    setIsChanageNameModal(true);
  };
  const handleDeleteClick = () => {
    setIsDeleteNameModal(true);
  };
  const handleExitClick = () => {
    setIsChanageNameModal(false);
    setIsDeleteNameModal(false);
  };
  const currentFolder = folders.filter((folder) => folder.id == folderId);
  const folderName = currentFolder.length ? currentFolder[0].name : "전체";
  return (
    <div className={style.root}>
      <div className={style.folderName}>{folderName}</div>
      <div
        className={clsx(style.buttons, {
          [style.hidden]: folderName === "전체",
        })}
      >
        <button>
          <img src={shareIcon} alt="공유하기" />
          공유
        </button>
        <button onClick={handleChangeNameClick}>
          <img src={penIcon} alt="이름변경하기" />
          이름변경
        </button>
        <button onClick={handleDeleteClick}>
          <img src={trashIcon} alt="삭제하기" />
          삭제
        </button>
      </div>
      {isChangeNameModal && (
        <Modal
          title="폴더 이름 변경"
          data={folderName}
          onExitClick={handleExitClick}
        />
      )}
      {isDeleteModal && (
        <Modal
          title="폴더 삭제"
          data={folderName}
          onExitClick={handleExitClick}
        />
      )}
    </div>
  );
}
export default CurrentFolder;
