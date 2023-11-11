/* 추가할 링크를 타이핑하는 인풋 컴포넌트 */

import { useState } from "react";
import styles from "./LinkAddBar.module.css";
import { ReactComponent as LinkIcon } from "assets/images/link-icon.svg";
import AddLinkModal from "commons/modals/AddLinkModal/AddLinkModal";
import ModalLayout from "commons/modals/ModalLayout";

function LinkAddBar() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const INITMODAL = {
    isOpened: false,
    modalType: "",
    targetId: "",
    targetTitle: "",
  };
  const [modalValues, setModalValues] = useState(INITMODAL);

  const handleModal = (e) => {
    e.preventDefault();
    if (!keyword) return;
    const newValue = {
      isOpened: true,
    };
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const closeModal = () => {
    setModalValues(() => {
      return { ...INITMODAL };
    });
  };
  return (
    <>
      {modalValues.isOpened && (
        <ModalLayout onClose={closeModal}>
          <AddLinkModal linkId={keyword} />
        </ModalLayout>
      )}
      <div className={styles["add-form-container"]}>
        <form>
          <div className={styles["add-link-form"]}>
            <LinkIcon className={styles["add-link-icon"]} />
            <input
              name="add-link-input"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="링크를 추가해보세요"
              className={styles["add-link-input"]}
            ></input>
            <button
              className={styles["add-link-button"]}
              id="addLinkButton"
              onClick={handleModal}
              type="submit"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LinkAddBar;
