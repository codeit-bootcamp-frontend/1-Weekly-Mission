import React from "react";
import styles from "./Folder.module.css";
import { FolderContents } from "@/api/folder";
type FolderProps = {
  folder: FolderContents;
};

export default function Folder({ items }: { items: FolderProps }) {
  const { folder } = items;
  const { name, owner } = folder;

  return (
    <div className={styles.container}>
      <div className={styles.text__codeit}>{owner.name}</div>
      <img
        src={owner.profileImageSource}
        alt={owner.name}
        width="200"
        height="200"
      />
      <div className={styles.text__favorite}>{name}</div>
    </div>
  );
}
