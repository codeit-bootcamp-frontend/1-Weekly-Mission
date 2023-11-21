import styles from "./ModalContentBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentBox = ({ header, content, onCloseClick }) => {
  return (
    <div className={cx("container")}>
      <button onClick={onCloseClick}>
        <img className={cx("close")} src="images/close.svg" alt="X모양 닫기 버튼" />
      </button>
      <div className={cx("items")}>
        {header}
        {content}
      </div>
    </div>
  );
};
