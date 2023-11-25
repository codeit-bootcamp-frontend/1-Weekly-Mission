import { ReactNode } from "react";
import styles from "./ModalHeader.module.css";

interface Props {
  title: string;
  subTitle?: ReactNode;
}

function ModalHeader({ title, subTitle }: Props) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  );
}

export default ModalHeader;
