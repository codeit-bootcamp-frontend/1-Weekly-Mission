import { useState } from "react";
import closeImg from "@/public/img/svg/close.svg";
import kakaoIcon from "@/public/img/svg/kakaoIcon.svg";
import facebookIcon from "@/public/img/svg/facebookIcon.svg";
import linkIcon from "@/public/img/svg/linkIcon.svg";
import { handleCopyClipBoard } from "@/utils/urlCopy";
import { folderOptionType } from "@/dataType/dataType";
import Image from "next/image";
import styles from "./modalFolder.module.css";

interface ModalFolderType {
  folderOption: folderOptionType;
  setFolderOption: React.Dispatch<
    React.SetStateAction<folderOptionType | null>
  >;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

const SNSICON = [
  {
    Icon: kakaoIcon,
    name: "카카오톡",
    identifier: styles.kakaoIcon,
  },
  {
    Icon: facebookIcon,
    name: "페이스북",
    identifier: styles.facebookIcon,
  },
  { Icon: linkIcon, name: "링크", identifier: styles.linkIcon },
];

const ModalFolder = ({
  folderOption,
  setFolderOption,
  setNewLink,
}: ModalFolderType) => {
  const { title, btnName, dataItem, share, folderData } = folderOption;
  const { data: folderLists } = folderData;
  const [changeName, setChangeName] = useState(
    title === "폴더 이름 변경" ? dataItem : ""
  );

  const isFolderName = () => {
    return title !== "폴더 이름 변경" && title !== "폴더 추가";
  };
  const isInput = () => {
    return title === "폴더 이름 변경" || title === "폴더 추가";
  };
  const isDelete = () => {
    if (title.indexOf("삭제") > -1) return true;
  };

  const handleClose = () => {
    setFolderOption(null);
    setNewLink("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChangeName(value);
  };
  if (!folderData) return;
  return (
    <div className={styles.folderModal}>
      <div className={styles.folderModalWrap}>
        <Image
          className={styles.closeBtn}
          src={closeImg}
          alt="닫기버튼아이콘"
          onClick={() => handleClose()}
        />
        <h2 className={styles.folderModalWrapH2}>{title}</h2>
        {isFolderName() ? (
          <h4 className={styles.folderName}>{dataItem}</h4>
        ) : null}
        {isInput() ? (
          <input
            className={styles.input}
            name="modalName"
            value={changeName ? changeName : ""}
            onChange={(event) => handleChange(event)}
            placeholder="내용 입력"
          />
        ) : null}
        {title === "폴더에 추가" ? (
          <ul className={styles.folderList}>
            {folderLists.map((list, index: number) => {
              return (
                <li className={styles.folderListLi} key={index}>
                  <h3 className={styles.folderListLiH3}>{list.name}</h3>
                  <h4 className={styles.folderListLiH4}>
                    {list.link.count}개의 링크
                  </h4>
                </li>
              );
            })}
          </ul>
        ) : null}
        {title !== "폴더 공유" ? (
          <button
            className={styles.button}
            type="button"
            style={{
              background: isDelete()
                ? "var(--linkbrary-red)"
                : "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)",
            }}
          >
            {btnName}
          </button>
        ) : null}

        {title === "폴더 공유" ? (
          <ul className={styles.linkCopy}>
            {SNSICON.map((list, index) => {
              return (
                <li className={styles.linkCopyLi} key={index}>
                  <div
                    className={`${styles.iconBorder} ${list.identifier}`}
                    onClick={() => handleCopyClipBoard(list.name, share)}
                  >
                    <Image
                      className={styles.linkCopyLiImg}
                      src={list.Icon}
                      alt={`${list.name}아이콘`}
                    />
                  </div>
                  <div className={styles.iconName}>{list.name}</div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ModalFolder;
