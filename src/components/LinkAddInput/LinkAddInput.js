import { useState } from "react";
import "./LinkAddInput.style.css";
import linkIcon from "../../assets/link-icon.svg";

function LinkAddInput() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div className="add-form-container">
      <form>
        <div className="add-link-form">
          <img src={linkIcon} className="add-link-icon" alt="link icon" />
          <input
            name="linkAdd-input"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="링크를 추가해보세요"
            className="add-link-input"
          ></input>
          <button className="add-link-button" type="submit">
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinkAddInput;
