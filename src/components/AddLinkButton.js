import classNames from "classnames";
import styles from "../styles/AddLinkButton.module.css";

const AddLinkButton = () => {
  return <button className={classNames(styles.cta, styles.cta_short)}>추가하기</button>;
};

export default AddLinkButton;
