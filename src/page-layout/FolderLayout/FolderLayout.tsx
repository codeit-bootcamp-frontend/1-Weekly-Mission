import { ReactNode } from "react";
import styles from "./FolderLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderLayoutProps = {
  linkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode;
};

export const FolderLayout = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutProps) => {
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
