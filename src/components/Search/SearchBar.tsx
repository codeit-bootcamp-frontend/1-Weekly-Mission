import { useState, ChangeEvent, useEffect } from "react";

import styles from "./SearchBar.module.css";

import searchIcon from "../../assets/images/searchIcon.svg";
import closeIcon from "../../assets/images/close.svg";
interface Props {
  linksListData?: any;
  onChange?: any;
}

const SearchBar = ({ linksListData, onChange }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (!linksListData || !linksListData.data) {
      onChange(undefined); // 빈 데이터 전달
      return;
    }

    const filteredData =
      value.trim() === ""
        ? linksListData.data // 검색어가 없을 때 전체 리스트를 유지
        : linksListData.data.filter((link: any) =>
            Object.values(link).some((val: any) =>
              val && typeof val === "string"
                ? val.toLowerCase().includes(value.toLowerCase())
                : false
            )
          );

    onChange(filteredData.length > 0 ? { data: filteredData } : undefined);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleResetValue = () => {
    setInputValue("");
    onChange(linksListData);
  };

  useEffect(() => {
    if (onChange) {
      onChange(linksListData);
    }
  }, [linksListData, onChange]);

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <img
          className={styles.searchIcon}
          src={searchIcon}
          alt="돋보기 모양 아이콘"
        />
        <input
          className={styles.input}
          name="search"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleChange}
        />
        {inputValue && (
          <button className={styles.resetButton} onClick={handleResetValue}>
            <img src={closeIcon} alt="지우기 이미지" />
          </button>
        )}
      </form>
      {inputValue && (
        <p className={styles.description}>
          <span className={styles.accent}>{inputValue}</span>으로 검색한
          결과입니다.
        </p>
      )}
    </div>
  );
};

export default SearchBar;
