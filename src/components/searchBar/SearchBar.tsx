import { FormEvent, KeyboardEvent } from "react";
import searchIcon from "../../assets/shared/Search.svg";
import "./searchBar.css";
import { ReactComponent as CloseButton } from "../../assets/common/close-button.svg";

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
      <div className="search-bar-container">
        <img
          src={searchIcon}
          alt="search-bar-icon"
          className="search-bar-search-icon"
        />
        <input
          placeholder="링크를 검색해 보세요."
          className="search-bar"
          onKeyUp={onKeyUp}
          ref={inputRef}
        />
        <CloseButton onClick={onClick} />
      </div>
    </form>
  );
}
