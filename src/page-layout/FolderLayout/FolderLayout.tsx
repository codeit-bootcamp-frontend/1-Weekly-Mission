import styles from "./FolderLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const FolderLayout = ({ linkForm, searchBar, folderToolBar, cardList }) => {
  return (
    <div className={cx("container")}>
      {linkForm}
      <div className={cx("items")}>
        {searchBar}
        <div className={cx("folder-box")}>
          {folderToolBar}
          {cardList}
        </div>
      </div>
    </div>
  );
};
