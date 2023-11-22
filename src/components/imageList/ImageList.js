import React from "react";
import ImageListItem from "./ImageListItem";
import styles from "./ImageList.module.css";

export default function ImageList({ items, isLoading }) {
  const {
    folder: { links },
  } = items;

  return (
    <ul>
      <div className={styles.container}>
        {links.map((item) => (
          <li key={item.id}>{!isLoading && <ImageListItem item={item} />}</li>
        ))}
      </div>
    </ul>
  );
}
