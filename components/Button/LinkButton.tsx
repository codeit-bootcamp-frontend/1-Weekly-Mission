import styles from "./Button.module.css";
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

function LinkButton({ className, href, title, children }: Props) {
  const buttonClass = clsx(styles.root, className);

  return (
    <Link className={buttonClass} href={href} title={title}>
      {children}
    </Link>
  );
}

export default LinkButton;
