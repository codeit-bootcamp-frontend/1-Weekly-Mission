/*LinkAddBar 컴포넌트*/

import { useState, ChangeEvent } from "react";
import Image from "next/image";

import LinkAddModal from "@/modals/LinkAddModal/LinkAddModal";
import { useModalStore } from "@/store/ModalStore";

import styles from "./LinkAddBar.module.scss";

function LinkAddBar() {
  const [keyword, setKeyword] = useState("");
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const modalName = useModalStore((state) => state.modalName);
  const showModal = useModalStore((state) => state.showModal);

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <>
      <div id="LinkAddBar" className={styles["add-form-container"]}>
        {isModalOpen && modalName === "LinkAddModal" && (
          <LinkAddModal link={keyword} />
        )}

        <div className={styles["add-link-form"]}>
          <Image
            src="/icons/link-icon.svg"
            alt="link icon"
            width={20}
            height={21}
            className={styles["add-link-icon"]}
          />
          <input
            name="add-link-input"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="링크를 추가해보세요"
            className={styles["add-link-input"]}
          ></input>
          <button
            onClick={() => showModal("LinkAddModal")}
            className={styles["add-link-button"]}
          >
            추가하기
          </button>
        </div>
      </div>
    </>
  );
}

export default LinkAddBar;
