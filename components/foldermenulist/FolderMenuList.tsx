import React, { useContext } from "react";
import Button from "../button/Button";
import styles from "./FolderMenuList.module.css";

import LocaleContext from "../../contexts/LocaleContext";
import Plus from "@/public/images/plus.svg";
import Link from "next/link";
export default function FolderMenuList() {
  const { LinkSDataArr, folderIdKey } = useContext(LocaleContext);

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {LinkSDataArr?.map((item) => {
          let { folderId, folderName } = item;
          // 전체의 folderId는 ""
          let isActive = false;
          if (String(folderId) === folderIdKey) {
            isActive = true;
          }
          if (folderId === "" && !folderIdKey) {
            isActive = true;
          }

          return (
            <Button
              isActive={isActive}
              onClick={() => {
                <Link href={`/folder/${folderId}`}></Link>;
              }}
              key={item.folderId}
            >
              {folderName}
            </Button>
          );
        })}
      </div>
      <div className={styles.add__folder__button}>
        <Button onClick={() => alert("추후기능만들예정")}>
          <span>폴더추가</span>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
