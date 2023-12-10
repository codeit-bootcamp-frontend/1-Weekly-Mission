import { ModalProps } from "@/types";
import styles from "./ModalBackground.module.scss";

function ModalBackground({ onClick }: ModalProps) {
  return <div onClick={onClick} className={styles["background"]}></div>;
}

function ModalContainer({ children }: ModalProps) {
  return <div className={styles["container"]}>{children}</div>;
}

export { ModalBackground, ModalContainer };
