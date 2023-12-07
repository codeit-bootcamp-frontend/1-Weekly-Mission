import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className, children, onClick }: Props) {
  const buttonClass = clsx(styles.root, className);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
