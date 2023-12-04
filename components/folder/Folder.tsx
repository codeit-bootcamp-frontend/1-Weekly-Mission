import React from "react";
import styles from "./Folder.module.css";
import { FolderContents } from "@/api/share";
import Image from "next/image";

type FolderProps = {
  data: { folder: FolderContents };
};

export default function Folder({ data }: FolderProps) {
  const { folder } = data;
  const { name, owner } = folder;

  return (
    <div className={styles.container}>
      <div className={styles.text__codeit}>{owner.name}</div>
      <Image
        src={owner.profileImageSource}
        alt={owner.name}
        width={200}
        height={200}
      />
      <div className={styles.text__favorite}>{name}</div>
    </div>
  );
}
