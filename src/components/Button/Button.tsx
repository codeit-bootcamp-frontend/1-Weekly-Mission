import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string;
  to?: string;
}

function Button({ as, className, to, title, children, onClick }: Props) {
  const buttonClass = clsx(styles.root, className);

  if (as === "Link" && to)
    return (
      <Link className={buttonClass} to={to} title={title}>
        {children}
      </Link>
    );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
