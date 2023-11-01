import React from "react";
import DataListItem from "./DataListItem";

import styles from "../imageList/ImageList.module.css";
import ItemSkeleton from "../skeleton/ItemSkeleton";

import useUserLinks from "../../hooks/useUserLinks";

export default function WholeData({ folderId }) {
  // const aaa = useParams(); // folderDErPage, 에서랑 똑같음
  // data가 있으면은 {folderId: "폴더아이디"} 없으면 아무것도 안 찍힘

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
