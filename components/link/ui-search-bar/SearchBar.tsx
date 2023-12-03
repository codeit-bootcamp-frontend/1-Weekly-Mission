import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE, CLOSE_IMAGE } from "./constant";
import { ChangeEventHandler, MouseEventHandler } from "react";

const cx = classNames.bind(styles);

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchBar = ({
  value,
  onChange,
  onCloseClick,
}: SearchBarProps) => {
  return (
    <div>
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
            <img
              src={CLOSE_IMAGE}
              alt="검색어 삭제 아이콘"
              className={cx("close-icon")}
            />
          </button>
        )}
      </div>

      {value && (
        <div className={cx("search-result")}>
          <p>
            <span className={cx("highlighted-text")}>{value}</span>
            (으)로 검색한 결과입니다.
          </p>
        </div>
      )}
    </div>
  );
};
