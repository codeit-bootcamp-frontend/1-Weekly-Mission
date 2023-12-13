import { useState } from "react";
import classNames from "classnames";

import styles from "./AddLinkModalContent.module.css";

import checkImg from "../../../assets/images/check.svg";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalButton from "../ModalButton/ModalButton";
import Image from "next/image";

interface Props {
  inputValue: string;
  folderListData: UserFolderData;
}

function AddLinkModalContent({ inputValue, folderListData }: Props) {
  const [selectedFolder, setSelectedFolder] = useState<UserFolder | null>(null);

  const folderListDataArray = folderListData?.data.sort((a, b) => a.id - b.id);

  const handleCheckClick = (folder: UserFolder) => {
    setSelectedFolder(folder);
  };

  return (
    <div className={styles.addLinkModal}>
      <div className={styles.headerContainer}>
        <ModalTitle>폴더에 추가</ModalTitle>
        <p className={styles.link}>{inputValue}</p>
      </div>
      <div className={styles.optionsContainer}>
        {folderListDataArray?.map((folder) => (
          <div
            className={classNames(
              styles.optionContainer,
              selectedFolder === folder && styles.selected
            )}
            key={folder.name}
            id={folder.name}
            onClick={() => handleCheckClick(folder)}
          >
            <div className={styles.option}>
              <h2>{folder.name}</h2>
              <p>{`${folder?.link?.count}개 링크`}</p>
            </div>
            {selectedFolder === folder && <Image src={checkImg} alt="check" />}
          </div>
        ))}
      </div>
      <ModalButton color="blue">추가하기</ModalButton>
    </div>
  );
}

export default AddLinkModalContent;
