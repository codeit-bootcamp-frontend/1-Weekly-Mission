import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE, CLOSE_IMAGE } from "./constant";

const cx = classNames.bind(styles);

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <div>
      <div className={cx("container")}>
        <input
          className={cx("input")}
          type="search"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src={SEARCH_IMAGE}
          alt="검색창인 것을 알려주는 돋보기 아이콘"
          className={cx("icon")}
        />
        {inputValue && (
          <img
            src={CLOSE_IMAGE}
            alt="검색어 지우기"
            className={cx("clear-icon")}
            onClick={handleClearInput}
          />
        )}
      </div>
      {inputValue && (
        <div className={cx("search-result")}>
          <p>
            <span className={cx("highlighted-text")}>{inputValue}</span>
            (으)로 검색한 결과입니다.
          </p>
        </div>
      )}
    </div>
  );
};
