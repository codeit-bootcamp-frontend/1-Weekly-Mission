import React, { useContext, useState } from "react";
import styles from "./FolderMenu.module.css";

import LocaleContext from "../../contexts/LocaleContext";
import shareImage from "../../assets/images/share.svg";
import nameChangeImage from "../../assets/images/namechange.svg";
import deleteImage from "../../assets/images/delete.svg";
import Modal from "../../common/modal/Modal";
export default function FolderMenu({ folderId }) {
  const [openModal, setOpenModal] = useState(false);
  const [tabName, setTabName] = useState("");
  const localeValue = useContext(LocaleContext); // obj
  const folder = localeValue[folderId];
  // folder의 타입이 undefined가 아니면은 isSelected = ture, undefined이면은 false
  const isSelected = typeof folder !== "undefined";
  // optional chaining 사용 , folder의 folderName키가 undefined, 즉없으면은 전체를 나오게한다
  const letter = folder?.folderName || "전체";

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleTab = (e) => {
    setTabName(e.target.name);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{letter}</p>
      {isSelected && (
        <div className={styles.images__container}>
          <img
            src={shareImage}
            alt="share"
            name="share"
            onClick={(e) => {
              handleModal();
              handleTab(e);
            }}
          />
          <img
            src={nameChangeImage}
            alt="nameChange"
            name="change"
            onClick={(e) => {
              handleModal();
              handleTab(e);
            }}
          />
          <img
            src={deleteImage}
            alt="delete"
            name="delete"
            onClick={(e) => {
              handleModal();
              handleTab(e);
            }}
          />
        </div>
      )}
      {/* openModal 상태가 true이면은 modal 보이게하기*/}
      {openModal && (
        <Modal
          setterFunc={setOpenModal}
          tabName={tabName}
          folderName={letter}
        />
      )}
    </div>
  );
}
