import styles from "./Button.module.css";
import classnames from "classnames";

const Button = ({ isLoading, onClick, size, children }) => (
  <button type="submit" disabled={isLoading} className={classnames(styles.button, styles[size])} onClick={onClick}>
    {children}
  </button>
);

export default Button;
