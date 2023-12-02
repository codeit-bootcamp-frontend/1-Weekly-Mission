import React from "react";
import { clsx } from "clsx";
import styles from "./Input.module.css";
export default function Input({ TYPE, ...props }) {
  return (
    <input
      className={clsx({
        [styles.container]: true,
        [styles.success]: props.isvalid === "true",
        [styles.error]: props.isvalid === "false",
        [styles.focus]: props.isfocus === "true",
      })}
      placeholder="placeholder"
      {...props}
      type={props.type}
    />
  );
}
