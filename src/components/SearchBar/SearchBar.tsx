/*SearchBar 컴포넌트: 
  검색어를 입력하는 컴포넌트. 이 검색어를 통해 원하는 Card 컴포넌트를 찾음.

  onChange: 엔터를 누를 경우 호출할 함수.
  keys: 입력한 검색어가 있을 때 input 내부 글자를 reset 해주는 resetButton을 렌더링해주는 값.
*/

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./SearchBar.module.scss";

function SearchBar({
  onChange,
  keys,
}: {
  onChange: (w: string) => void;
  keys?: string;
}) {
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
  const handleResetSearchBar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setText("");
    onChange("");
  };

  return (
    <div className={styles["search-form-container"]}>
      <form className={styles["search-form"]}>
        <Image
          src="/icons/search-icon.svg"
          width={17}
          height={16}
          alt="search icon"
          className={styles["search-icon"]}
        />
        <input
          className={styles["search-bar"]}
          value={text}
          placeholder="검색어를 입력하세요."
          onChange={handleTitleChange}
          onKeyDown={handleKeyword}
        ></input>
        {keys && (
          <button
            className={styles["reset-button"]}
            onClick={handleResetSearchBar}
          >
            <Image
              src="/icons/reset-keywords.svg"
              width={17}
              height={16}
              alt="reset button"
            />
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
