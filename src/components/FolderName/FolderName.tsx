import styles from "./FolderName.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FolderName({ children }: Props) {
  return <h2 className={styles.root}>{children}</h2>;
}

export default FolderName;
