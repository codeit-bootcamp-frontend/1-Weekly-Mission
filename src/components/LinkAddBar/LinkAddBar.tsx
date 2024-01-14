/*LinkAddBar 컴포넌트*/

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./LinkAddBar.module.scss";
import LinkAddModal from "@/modals/LinkAddModal/LinkAddModal";

function LinkAddBar() {
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (keyword) {
      setIsOpen(true);
    }
  };
  const closeModal = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <>
      <div id="LinkAddBar" className={styles["add-form-container"]}>
        {isOpen && <LinkAddModal link={keyword} onBlur={closeModal} />}

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
          <button onClick={openModal} className={styles["add-link-button"]}>
            추가하기
          </button>
        </div>
      </div>
    </>
  );
}

export default LinkAddBar;
