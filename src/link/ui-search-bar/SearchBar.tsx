import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE } from "./constant";
import { ChangeEventHandler, MouseEventHandler } from "react";
import CloseIcon from "./close.svg";

const cx = classNames.bind(styles);

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchBar = ({ value, onChange, onCloseClick }: SearchBarProps) => {
  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx("search-icon")}
      />
      {value && (
        <button className={cx("close")} onClick={onCloseClick}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
