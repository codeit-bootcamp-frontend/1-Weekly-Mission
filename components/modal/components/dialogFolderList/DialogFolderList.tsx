import React from "react";
import styles from "./dialogFolderList.module.css";
import { ChildrenProps } from "../../../../types/types";

export default function DialogFolderList({ children }: ChildrenProps) {
  return <div className={styles.dialogFolderList}>{children}</div>;
}
