import React, { useContext } from "react";
import DataListItem from "./DataListItem";
import styles from "../imagelist/ImageList.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import SearchContext from "../../contexts/SearchContext";
export default function DataList({ folderIdKey }) {
  const { LinkSDataArr } = useContext(LocaleContext);
  const { inputValue, handleInputFunc } = useContext(SearchContext);

  if (!folderIdKey) {
    return (
      <div className={styles.container}>
        {LinkSDataArr?.map((data) => {
          const { folderId, linksdata } = data;

          if (!folderId) {
            return linksdata.map((item) => {
              const { url, title, description } = item;
              if (
                url?.includes(inputValue) ||
                title?.includes(inputValue) ||
                description?.includes(inputValue)
              )
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
          const { url, title, description } = item;
          if (
            url?.includes(inputValue) ||
            title?.includes(inputValue) ||
            description?.includes(inputValue)
          )
            return <DataListItem key={item.id} item={item} />;
        })}
    </div>
  );
}
