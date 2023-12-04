import React from "react";
import styles from "./Profile.module.css";
import { UserProfile } from "@/api/folder";
export default function Profile({ data }: { data: UserProfile[] }) {
  return <div className={styles.container}>{data[data.length - 1].email}</div>;
}
