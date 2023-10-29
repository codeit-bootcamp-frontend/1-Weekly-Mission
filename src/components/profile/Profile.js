import React from "react";
import styles from "./Profile.module.css";
export default function Profile({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? data[data.length - 1].email : data.email}
    </div>
  );
}
