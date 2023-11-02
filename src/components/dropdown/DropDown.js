import React, { useState } from "react";
import styles from "./DropDown.module.css";
import HeaderModal from "../../common/modal/HeaderModal";
export default function DropDown() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.sub__container}>
        <li>삭제하기</li>
        <li onClick={handleModal}>폴더에추가하기</li>
        {openModal && <HeaderModal setterFunc={setOpenModal} />}
      </ul>
    </div>
  );
}
