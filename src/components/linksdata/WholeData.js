import React from "react";
import useFetch from "../../hooks/useFetch";
import DataListItem from "./DataListItem";

import styles from "../imageList/ImageList.module.css";
import ItemSkeleton from "../skeleton/ItemSkeleton";
import { useParams } from "react-router-dom";

export default function WholeData() {
  // /api/users/1/links?folderId={해당 폴더 ID}

  // 전체 버튼 클릭했을때
  const { folderId } = useParams();

  const [linkData, isLoading] = useFetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links${
      folderId ? `?folderId=${folderId}` : ""
    }`
  );

  const result = linkData?.data;
  console.log(result);

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
