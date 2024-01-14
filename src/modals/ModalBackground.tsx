import { PropsWithChildren } from "react";
import styles from "./ModalBackground.module.scss";

function ModalBackground() {
  return <div className={styles["background"]}></div>;
}

function ModalContainer({ children }: PropsWithChildren) {
  return <div className={styles["container"]}>{children}</div>;
}

export { ModalBackground, ModalContainer };
