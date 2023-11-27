import { ReactNode } from "react";
import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";

interface SharedLayoutProps {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
}

const cx = classNames.bind(styles);

export const SharedLayout = ({ folderInfo, searchBar, cardList }: SharedLayoutProps) => {
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
