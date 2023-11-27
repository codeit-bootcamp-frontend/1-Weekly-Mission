import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { CLOSE_IMAGE, SEARCH_IMAGE } from "./constant";
import { ChangeEvent } from "react";

interface SearchBarProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

const cx = classNames.bind(styles);

export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery && setSearchQuery(e.target.value)}
      />
      <img src={SEARCH_IMAGE} alt="검색창인 것을 알려주는 돋보기 아이콘" className={cx("searchIcon")} />
      {searchQuery && (
        <button className={cx("closeButton")} onClick={() => setSearchQuery && setSearchQuery("")}>
          <img src={CLOSE_IMAGE} alt="검색창을 초기화 하기 위한 X모양 아이콘" />
        </button>
      )}
    </div>
  );
};
