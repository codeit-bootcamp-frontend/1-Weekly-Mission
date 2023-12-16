import React, { useContext } from "react";
import DataListItem from "./DataListItem";
import styles from "./DataList.module.css";
import SearchContext from "../../contexts/SearchContext";
import { Folder } from "@/types/folderMenuListTypes";
export type Data = Folder[] | [] | undefined;

type DataListProps = {
  folderIdKey: string | undefined;
  data: Data;
};

export default function DataList({ folderIdKey, data }: DataListProps) {
  const { inputValue, handleInputFunc } = useContext(SearchContext);

  if (!folderIdKey) {
    return (
      <div className={styles.container}>
        {data?.map((item) => {
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

  return (
    <div className={styles.container}>
      {data?.map((item) => {
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
