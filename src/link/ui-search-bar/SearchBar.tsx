import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE } from "./constant";

const cx = classNames.bind(styles);

export const SearchBar = () => {
  return (
    <div className={cx("container")}>
      <input className={cx("input")} type="search" placeholder="링크를 검색해 보세요." />
      <img src={SEARCH_IMAGE} alt="검색창인 것을 알려주는 돋보기 아이콘" className={cx("icon")} />
    </div>
  );
};
