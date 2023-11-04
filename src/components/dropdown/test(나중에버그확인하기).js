import React, { useContext, useState } from "react";
import styles from "./DropDown.module.css";
import HeaderModal from "../../common/modal/HeaderModal";
import Modal from "../../common/modal/Modal";
import LocaleContext from "../../contexts/LocaleContext";
import { useParams } from "react-router-dom";

export default function DropDown() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.sub__container}>
        <li>삭제하기</li>
        {openModal && (
          <Modal
            setterFunc={setOpenModal}
            tabName="delete"
            folderName="유용한 글"
          />
        )}
        <li onClick={handleModal}>폴더에추가하기</li>
        {openModal && <HeaderModal setterFunc={setOpenModal} />}
      </ul>
    </div>
  );
}
