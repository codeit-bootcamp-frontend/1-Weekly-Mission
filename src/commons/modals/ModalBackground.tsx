import { ReactNode } from "react";
import styles from "./ModalBackground.module.scss";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

function ModalBackground({ onClick }: Props) {
  return <div onClick={onClick} className={styles["background"]}></div>;
}

function ModalContainer({ children }: Props) {
  return <div className={styles["container"]}>{children}</div>;
}

export { ModalBackground, ModalContainer };
