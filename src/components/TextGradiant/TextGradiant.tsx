import { ReactNode } from "react";
import styles from "./TextGradiant.module.css";

interface Props {
  className: string;
  children: ReactNode;
}

function TextGradiant({ className, children }: Props) {
  const textGradiantStyle = `${styles.root} ${className}`;

  return <span className={textGradiantStyle}>{children}</span>;
}

export default TextGradiant;
