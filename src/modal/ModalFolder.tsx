import React, { useState } from "react";
import closeImg from "../img/svg/close.svg";
import kakaoIcon from "../img/svg/kakaoIcon.svg";
import facebookIcon from "../img/svg/facebookIcon.svg";
import linkIcon from "../img/svg/linkIcon.svg";
import "./modalFolder.css";
import { handleCopyClipBoard } from "../utils/urlCopy";

interface ModalFolderType {
  folderOption: any;
  setFolderOption: any;
  setNewLink: any;
}

const SNSICON = [
  { Icon: kakaoIcon, name: "카카오톡", identifier: "kakaoIcon" },
  { Icon: facebookIcon, name: "페이스북", identifier: "facebookIcon" },
  { Icon: linkIcon, name: "링크", identifier: "linkIcon" },
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

  if (!folderLists) return;

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

  return (
    <div className="folder-modal">
      <div className="folder-modal-wrap">
        <img
          className="close-btn"
          src={closeImg}
          alt="닫기버튼아이콘"
          onClick={() => handleClose()}
        />
        <h2>{title}</h2>
        {isFolderName() ? <h4 className="folder-name">{dataItem}</h4> : null}
        {isInput() ? (
          <input
            name="modalName"
            value={changeName}
            onChange={(event) => handleChange(event)}
            placeholder="내용 입력"
          />
        ) : null}
        {title === "폴더에 추가" ? (
          <ul className="folder-list">
            {folderLists.map((list: any, index: number) => {
              return (
                <li key={index}>
                  <h3>{list.name}</h3>
                  <h4>{list.link.count}개의 링크</h4>
                </li>
              );
            })}
          </ul>
        ) : null}
        {title !== "폴더 공유" ? (
          <button
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
          <ul className="link-copy">
            {SNSICON.map((list, index) => {
              return (
                <li key={index}>
                  <div
                    className={`icon-border ${list.identifier}`}
                    onClick={() => handleCopyClipBoard(list.name, share)}
                  >
                    <img src={list.Icon} alt={`${list.name}아이콘`} />
                  </div>
                  <div className="icon-name">{list.name}</div>
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
