import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import CloseIcon from "../../assets/icons/Close";

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
  };

  const handleClear = () => {
    setLocalSearchTerm("");
  };

  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          className={styles.searchInput}
          type="text"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder="링크를 검색해 보세요."
        />
        {localSearchTerm && (
          <CloseIcon className={styles.closeIcon} onClick={handleClear} />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
