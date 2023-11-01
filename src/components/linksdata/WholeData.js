import React from "react";
import DataListItem from "./DataListItem";

import styles from "../imageList/ImageList.module.css";
import ItemSkeleton from "../skeleton/ItemSkeleton";

import useUserLinks from "../../hooks/useUserLinks";
import useTest from "../../hooks/useTest";
import { fetchUserLinks } from "./../../api/users";
export default function WholeData({ folderId }) {
  const USER_ID = 1;

  const [linkData, isLoading] = useUserLinks({
    userId: USER_ID,
    folderId: folderId,
  });
  // const [a, b] = useTest(() => {
  //   fetchUserLinks({ userId: USER_ID, folderId: folderId });
  // });
  // console.log(a);

  const result = linkData?.data;

  if (result && result.length > 0) {
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
  return <div className={styles.text}>데이터가없습니다</div>;
}
