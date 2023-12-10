import { useState, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./LinkAddBar.module.scss";

function LinkAddBar() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <>
      <div id="LinkAddBar" className={styles["add-form-container"]}>
        <form>
          <div className={styles["add-link-form"]}>
            <Image
              src="icons/link-icon.svg"
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
              className={styles["add-link-button"]}
              id="addLinkButton"
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
