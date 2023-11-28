import { ReactNode } from "react";
import classnames from "classnames";

import styles from "./Button.module.css";

interface Props {
  isLoading: boolean;
  onClick: () => void;
  size: "short" | "long";
  children: ReactNode;
}

const Button = ({ isLoading, onClick, size, children }: Props) => (
  <button
    type="submit"
    disabled={isLoading}
    className={classnames(styles.button, styles[size])}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
