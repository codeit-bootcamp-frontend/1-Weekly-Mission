import React from "react";
import styles from "./dialogLink.module.css";
import { ChildrenProps } from "../../../../types/types";

export default function DialogLink({ children }: ChildrenProps) {
  return <p className={styles.dialogLink}>{children}</p>;
}
