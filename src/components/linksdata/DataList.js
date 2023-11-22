import React, { useContext } from "react";
import DataListItem from "./DataListItem";
import styles from "../imageList/ImageList.module.css";
import LocaleContext from "../../contexts/LocaleContext";
export default function DataList({ folderIdKey }) {
  const { LinkSDataArr } = useContext(LocaleContext);

  if (!folderIdKey) {
    return (
      <div className={styles.container}>
        {LinkSDataArr?.map((data) => {
          const { folderId, linksdata } = data;
          if (!folderId) {
            return linksdata.map((item) => {
              return <DataListItem key={item.id} item={item} />;
            });
          }
        })}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {LinkSDataArr?.filter((data) => data.folderId === Number(folderIdKey))
        ?.map((data) => data.linksdata)[0]
        ?.map((item) => {
          return <DataListItem key={item.id} item={item} />;
        })}
    </div>
  );
}
