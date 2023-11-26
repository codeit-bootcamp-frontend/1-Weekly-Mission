import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface folderButtonValue {
  text: string;
  onClick: () => void;
  isSelected?: boolean | null;
}

export const FolderButton = ({
  text,
  onClick,
  isSelected = false,
}: folderButtonValue) => {
  return (
    <button
      className={cx("container", { selected: isSelected })}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
