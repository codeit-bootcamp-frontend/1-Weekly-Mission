import React from "react";
import styles from "./HeaderButton.module.css";
import linkImage from "../../assets/images/link.svg";
import HeaderModal from "../../common/modal/HeaderModal";
import { useState } from "react";

export default function HeaderButton() {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button__container}>
        <div className={styles.input__container}>
          <img className={styles.image} src={linkImage} alt="링크이미지" />
          <input
            className={styles.input}
            placeholder="링크를 추가해보세요"
            onChange={handleInput}
          />
        </div>

        <button className={styles.add__button} onClick={handleModal}>
          추가하기
        </button>
        {/* openModal이 true이면은 HeaderModal를 return한다 */}
        {openModal && (
          <HeaderModal setterFunc={setOpenModal} inputLink={inputText} />
        )}
      </div>
    </div>
  );
}
