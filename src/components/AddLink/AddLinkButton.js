import { useState } from "react";
import classNames from "classnames";
import styles from "./AddLinkButton.module.css";
import ModalContainer from "../Modal/ModalContainer";

const AddLinkButton = ({ inputValue, children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (!inputValue) return;
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && <ModalContainer onClose={handleCloseModal}>{children}</ModalContainer>}
      <button className={classNames(styles.cta, styles.ctaShort)} onClick={handleOpenModal}>
        추가하기
      </button>
    </>
  );
};

export default AddLinkButton;
