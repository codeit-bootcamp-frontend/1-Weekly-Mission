import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import DataListItem from "./DataListItem";
import LocaleContext from "../../contexts/LocaleContext";

import styles from "../imageList/ImageList.module.css";
import ItemSkeleton from "../skeleton/ItemSkeleton";

// 전체 버튼 클릭했을때
export default function WholeData() {
  const [linkData, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links"
  );

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
