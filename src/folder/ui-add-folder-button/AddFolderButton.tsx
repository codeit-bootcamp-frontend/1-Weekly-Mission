import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as AddIcon } from "./add.svg";

interface AddFolderButtonProps {
  onClick: () => void;
}

const cx = classNames.bind(styles);

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
