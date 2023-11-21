import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const SharedLayout = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className={cx("container")}>
      {folderInfo}
      <div className={cx("items")}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
