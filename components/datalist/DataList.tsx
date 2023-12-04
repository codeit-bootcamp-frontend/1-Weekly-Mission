import React, { useContext } from "react";
import DataListItem from "./DataListItem";
import styles from "./DataList.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import SearchContext from "../../contexts/SearchContext";
import { FolderLinks } from "@/api/folder";
import { LinksDataProps } from "../types/folderTypes";

type DataListProps = {
  folderIdKey: string | undefined;
};

// type LinksDataProps = {
//   folderId: any;
//   folderName: string;
//   linksdata: FolderLinks[];
// };

export default function DataList({ folderIdKey }: DataListProps) {
  const { LinkSDataArr } = useContext(LocaleContext);
  const { inputValue, handleInputFunc } = useContext(SearchContext);

  if (!folderIdKey) {
    return (
      <div className={styles.container}>
        {LinkSDataArr?.map((data) => {
          const {
            folderId,
            linksdata,
          }: { folderId: number | undefined; linksdata: FolderLinks[] } = data;

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

  // return (
  //   <div className={styles.container}>
  //     {LinkSDataArr?.filter((data) => data.folderId === Number(folderIdKey))
  //       ?.map((data) => data.linksdata)[0]
  //       ?.map((item) => {
  //         const { url, title, description } = item;
  //         if (
  //           url?.includes(inputValue) ||
  //           title?.includes(inputValue) ||
  //           description?.includes(inputValue)
  //         )
  //           return <DataListItem key={item.id} item={item} />;
  //       })}
  //   </div>
  // );

  return (
    <div className={styles.container}>
      {LinkSDataArr?.filter(
        (data: LinksDataProps) => data.folderId === Number(folderIdKey)
      )
        ?.map((data: LinksDataProps) => data.linksdata)[0]
        ?.map((item: FolderLinks) => {
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
