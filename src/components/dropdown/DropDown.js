import React, { useContext, useState } from "react";
import styles from "./DropDown.module.css";
import HeaderModal from "../../common/modal/HeaderModal";

import Modal from "../../common/modal/Modal";
import LocaleContext from "../../contexts/LocaleContext";
import { useLocation } from "react-router-dom";
export default function DropDown() {
  const [openAddModal, setOpenModal] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const localeValue = useContext(LocaleContext); // obj
  const location = useLocation();
  const findNum = location.pathname.replace("/folder/", "");
  const folderName = localeValue[findNum]?.folderName || "전체";

  const handleModal = (e) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModal(true);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.sub__container}>
        <li onClick={handleDeleteModal}>삭제하기</li>
        {openDeleteModal && (
          <Modal
            setterFunc={setDeleteModal}
            tabName="delete"
            folderName={folderName}
          />
        )}
        <li onClick={handleModal}>폴더에추가하기</li>
        {openAddModal && <HeaderModal setterFunc={setOpenModal} />}
      </ul>
    </div>
  );
}
