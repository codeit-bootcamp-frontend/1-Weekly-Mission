import style from "./AddLinkModal.module.css";
import closeIcon from "../../assets/img/modal-close.svg";
import checkIcon from "../../assets/img/check.svg";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

interface FolderDataProps {
  folderName: string;
  folderCount: number;
}

interface ModalProps {
  url: string;
  folders: Folder[] | [] | null;
  onExitClick: () => void;
}

export type Folder = {
  id: string | number;
  link: {
    count: number;
  };
  name: string;
};
function FolderData({ folderName, folderCount }: FolderDataProps) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div
      className={clsx(style.folder, {
        [style.checkFolder]: isClick,
        [style.unCheckFolder]: !isClick,
      })}
      onClick={handleClick}
    >
      <div className={style.folderContainer}>
        <h1
          className={clsx(style.folderName, {
            [style.checkFolderName]: isClick,
          })}
        >
          {folderName}
        </h1>
        <p className={style.folderCount}>{folderCount}개 링크</p>
      </div>

      <Image
        className={clsx(style.checkImg, {
          [style.showCheck]: isClick,
          [style.hideCheck]: !isClick,
        })}
        src={checkIcon}
        alt="폴더 체크"
      />
    </div>
  );
}

function AddLinkModal({ url, folders, onExitClick }: ModalProps) {
  let newFolders: Folder[] = [];
  if (folders) {
    newFolders = [...folders];
    newFolders.shift();
  }

  const handleExitClick = () => {
    onExitClick();
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.root}>
        <button className={style.closeModalButton} onClick={handleExitClick}>
          <Image src={closeIcon} alt="모달 닫기" />
        </button>
        <div>
          <div className={style.title}>폴더에 추가</div>
          <div className={style.url}>{url}</div>
        </div>

        <div className={style.folders}>
          {newFolders.map((folder) => {
            return (
              <FolderData
                key={folder.id}
                // folderId={folder.id}
                folderCount={folder.link.count}
                folderName={folder.name}
              />
            );
          })}
        </div>
        <button className={style.addButton}>추가하기</button>
      </div>
    </div>
  );
}

export default AddLinkModal;
