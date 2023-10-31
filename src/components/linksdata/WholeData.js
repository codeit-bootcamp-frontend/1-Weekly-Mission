import React from "react";
import useFetch from "../../hooks/useFetch";
import DataListItem from "./DataListItem";

import styles from "../imageList/ImageList.module.css";
import ItemSkeleton from "../skeleton/ItemSkeleton";
import { useParams } from "react-router-dom";
import useUserLinks from "../../hooks/useUserLinks";

export default function WholeData() {
  // /api/users/1/links?folderId={해당 폴더 ID}
  const { folderId } = useParams();
  const [linkData, isLoading] = useUserLinks({ userId: 1, folderId: folderId });

  const result = linkData?.data;

  return (
    <ul>
      <div className={styles.container}>
        {result &&
          result.map((item) => (
            <li key={item.id}>
              {!isLoading ? <DataListItem item={item} /> : <ItemSkeleton />}
            </li>
          ))}
      </div>
    </ul>
  );
}
