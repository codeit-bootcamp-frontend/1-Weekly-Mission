import styles from "./FolderUtils.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FolderUtils({ children }: Props) {
  return (
    <div className={styles.folderUtils}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default FolderUtils;
