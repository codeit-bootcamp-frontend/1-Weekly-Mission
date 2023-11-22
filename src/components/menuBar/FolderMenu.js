import React, { useContext, useState } from "react";
import styles from "./FolderMenu.module.css";

import LocaleContext from "../../contexts/LocaleContext";
import shareImage from "../../assets/images/share.svg";
import nameChangeImage from "../../assets/images/namechange.svg";
import deleteImage from "../../assets/images/delete.svg";
import Modal from "../../common/modal/Modal";
export default function FolderMenu({ folderIdKey }) {
  const [openModal, setOpenModal] = useState(false);
  const [tabName, setTabName] = useState("");
  const { ObjectValue, LinkSDataArr } = useContext(LocaleContext); // obj
  const folder = ObjectValue[folderIdKey];
  const folderName = folder?.folderName || "전체";

  const isSelected = typeof folder !== "undefined";

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleTab = (e) => {
    setTabName(e.target.name);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{folderName}</p>
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

      {openModal && (
        <Modal
          setterFunc={setOpenModal}
          tabName={tabName}
          folderName={folderName}
        />
      )}
    </div>
  );
}
