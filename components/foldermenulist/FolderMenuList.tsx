import React, { useContext } from "react";
import Button from "../button/Button";
import styles from "./FolderMenuList.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import Plus from "@/public/images/plus.svg";

import { useRouter } from "next/router";

export default function FolderMenuList() {
  const { LinkSDataArr, folderIdKey } = useContext(LocaleContext);
  const router = useRouter();
  // const { id } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {LinkSDataArr?.map((item) => {
          const { folderId, folderName } = item;

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
                router.push(`/folder/${folderId}`);
              }}
              // key={item.folderId}
              key={folderId}
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
