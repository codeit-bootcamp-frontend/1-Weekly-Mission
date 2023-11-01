/* 추가할 링크를 타이핑하는 인풋 컴포넌트 */

/* css 모듈 방식 적용
 */

import { useState } from "react";
import styles from "./LinkAddInput.module.css";
import { ReactComponent as LinkIcon } from "assets/images/link-icon.svg";

function LinkAddInput() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div className={styles["add-form-container"]}>
      <form>
        <div className={styles["add-link-form"]}>
          <LinkIcon />
          <input
            name="add-link-input"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="링크를 추가해보세요"
            className={styles["add-link-input"]}
          ></input>
          <button className={styles["add-link-button"]} type="submit">
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinkAddInput;
