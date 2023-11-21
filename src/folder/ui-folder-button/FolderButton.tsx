import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const FolderButton = ({ text, onClick, isSelected = false }) => {
  return (
    <button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
