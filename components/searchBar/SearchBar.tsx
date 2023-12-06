import { FormEvent, KeyboardEvent } from "react";
import searchIcon from "@/public/icons/Search.svg";
import styles from "./searchBar.module.css";
import closeButton from "@/public/icons/close-button.svg";
import Image from "next/image";

interface SearchBarProps {
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  keyword?: string;
  onSubmit: (keyword: string) => void;
}

export default function SearchBar({
  onKeyUp,
  onClick,
  inputRef,
  keyword,
  onSubmit,
}: SearchBarProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) return;
    onSubmit?.(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.searchBarContainer}>
        <Image
          src={searchIcon}
          alt="search-bar-icon"
          className={styles.searchBarSearchIcon}
          width={24}
          height={24}
        />
        <input
          placeholder="링크를 검색해 보세요."
          className={styles.searchBar}
          onKeyUp={onKeyUp}
          ref={inputRef}
        />
        <Image
          src={closeButton}
          alt="close-button"
          className={styles.searchBarCancelButton}
          onClick={onClick}
          width={24}
          height={24}
        />
      </div>
    </form>
  );
}
