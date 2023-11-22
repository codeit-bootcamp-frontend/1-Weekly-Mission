import React, { useState } from "react";
import styles from "./DropDown.module.css";
import HeaderModal from "../../common/modal/HeaderModal";
import Modal from "../../common/modal/Modal";
export default function DropDown({ linkUrl }) {
  const [openAddModal, setOpenModal] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);

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
            tabName="deleteLink"
            linkUrl={linkUrl}
          ></Modal>
        )}

        <li onClick={handleModal}>폴더에추가하기</li>
        {openAddModal && <HeaderModal setterFunc={setOpenModal} />}
      </ul>
    </div>
  );
}
