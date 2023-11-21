import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

interface FolderButtonProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

const cx = classNames.bind(styles);

export const FolderButton = ({ text, onClick, isSelected = false }: FolderButtonProps) => {
  return (
    <button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
