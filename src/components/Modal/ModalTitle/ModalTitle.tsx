import { ReactNode } from "react";

import styles from "./ModalTitle.module.css";

interface Props {
  children: ReactNode;
}

const ModalTitle = ({ children }: Props) => {
  return <h1 className={styles.modalTitle}>{children}</h1>;
};

export default ModalTitle;
