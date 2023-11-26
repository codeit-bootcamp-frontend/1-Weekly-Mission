import { useState, ChangeEvent } from "react";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "src/assets/icons/search-icon.svg";
import { ReactComponent as ResetIcon } from "src/assets/icons/reset-keywords.svg";

interface Props {
  onChange: (w: string) => void;
  keys?: string;
}
function SearchBar({ onChange, keys }: Props) {
  const [text, setText] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e?.keyCode === 13) {
      e.preventDefault();
      onChange(text);
    }
  };
  const handleResetKey = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setText("");
    onChange("");
  };

  return (
    <div className={styles["search-form-container"]}>
      <form className={styles["search-form"]}>
        <SearchIcon className={styles["search-icon"]} />
        <input
          className={styles["search-bar"]}
          value={text}
          placeholder="검색어를 입력하세요."
          onChange={handleTitleChange}
          onKeyDown={handleKeyword}
        ></input>
        {keys && (
          <button className={styles["reset-button"]} onClick={handleResetKey}>
            <ResetIcon />
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
