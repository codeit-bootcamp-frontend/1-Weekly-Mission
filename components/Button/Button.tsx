import { CSSProperties, ReactNode } from "react";
import classnames from "classnames";

import styles from "./Button.module.css";

interface Props {
  isLoading?: boolean;
  onClick?: () => void;
  size: "large" | "small" | number;
  children: ReactNode;
}

function Button({ isLoading = false, onClick, size, children }: Props) {
  let buttonStyles: CSSProperties = {};

  if (typeof size === "number") {
    buttonStyles = {
      maxWidth: `${size}rem`,
    };
  }

  return (
    <button
      type="submit"
      disabled={isLoading}
      className={classnames(
        styles.button,
        typeof size !== "number" ? styles[size] : ""
      )}
      onClick={onClick}
      style={buttonStyles}
    >
      {children}
    </button>
  );
}

export default Button;
