import styles from "./KebabButton.module.scss";
import { ReactComponent as KebabIcon } from "assets/images/kebab.svg";
import { useState } from "react";
import ModalLayout from "commons/modals/ModalLayout";
import DeleteLinkModal from "commons/modals/DeleteLinkModal/DeleteLinkModal";
import AddLinkModal from "commons/modals/AddLinkModal/AddLinkModal";

function KebabButton({ card }) {
  const INITMODAL = {
    isOpened: false,
    modalType: "",
    targetId: "",
    targetTitle: "",
  };
  const [modalValues, setModalValues] = useState(INITMODAL);

  const handleModal = (e) => {
    e.preventDefault();
    const newValue = {
      isOpened: true,
      targetId: e.target.id,
      targetTitle: card.card.url,
    };
    setIsKebab(false);
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const closeModal = () => {
    setModalValues(() => {
      return { ...INITMODAL };
    });
  };

  const [isKebab, setIsKebab] = useState(false);
  const clickKebab = () => {
    setIsKebab(true);
  };
  return (
    <>
      {modalValues.isOpened && modalValues.targetId === "kebabDeleteButton" && (
        <ModalLayout onClose={closeModal}>
          <DeleteLinkModal linkId={modalValues.targetTitle} />
        </ModalLayout>
      )}
      {modalValues.isOpened && modalValues.targetId === "kebabAddButton" && (
        <ModalLayout onClose={closeModal}>
          <AddLinkModal linkId={modalValues.targetTitle} />
        </ModalLayout>
      )}
      <div className={styles["parent-kebab"]}>
        <button className={styles["kebab-button"]} onClick={clickKebab}>
          <KebabIcon />
        </button>
        {isKebab && (
          <div className={styles["kebab-menu"]}>
            <button
              id="kebabDeleteButton"
              className={styles["button"]}
              onClick={handleModal}
            >
              삭제하기
            </button>
            <div className={styles["spacing-div"]}></div>
            <button
              id="kebabAddButton"
              className={styles["button"]}
              onClick={handleModal}
            >
              폴더에 추가
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default KebabButton;
