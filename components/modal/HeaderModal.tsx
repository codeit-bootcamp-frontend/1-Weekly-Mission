import React, { useContext, useState } from "react";
import styles from "./HeaderModal.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import Check from "@/public/images/check.svg";
import { FolderLinks } from "@/api/folder";

type HeaderModalProps = {
  setterFunc: (value: boolean) => void;
  inputLink?: string | null;
};

export default function HeaderModal({
  setterFunc,
  inputLink,
}: HeaderModalProps) {
  const { LinkSDataArr: linkData } = useContext(LocaleContext);
  const [clickedFolderName, setClickedFolderName] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const handleClick = (folderName: string) => {
    setIsAdd(!isAdd);
    setClickedFolderName(folderName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button
          className={styles.cancel__button}
          onClick={() => setterFunc(false)}
        >
          X
        </button>
        <p className={styles.title}>폴더에추가</p>
        <p>{inputLink}</p>
        {linkData.map((item) => {
          const {
            folderId,
            folderName,
            linksdata,
          }: {
            folderId: number;
            folderName: string;
            linksdata: FolderLinks[];
          } = item;

          return (
            <div
              key={folderId}
              className={styles.links}
              onClick={() => handleClick(folderName)}
            >
              <p>
                <span>{folderName}</span>
                <span>{linksdata && linksdata.length}개링크</span>
              </p>
              {isAdd && folderName === clickedFolderName && <Check></Check>}
            </div>
          );
        })}
        <button className={styles.button}>추가하기</button>
      </div>
    </div>
  );
}
