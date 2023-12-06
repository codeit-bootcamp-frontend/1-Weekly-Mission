import React from "react";
import styles from "./dialogTitle.module.css";
import { ChildrenProps } from "../../../../types/types";

export default function DialogTitle({ children }: ChildrenProps) {
  return <h1 className={styles.dialogTitle}>{children}</h1>;
}
