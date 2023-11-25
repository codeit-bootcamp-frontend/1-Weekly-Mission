import { useState, ChangeEvent } from "react";
import styles from "./LinkAddBar.module.scss";
import { ReactComponent as LinkIcon } from "src/assets/images/link-icon.svg";

function LinkAddBar() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e: ChangeEvent) =>
    setKeyword((e.target as HTMLInputElement).value);

  return (
    <>
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
