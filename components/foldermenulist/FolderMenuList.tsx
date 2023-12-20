import React, { useContext } from "react";
import Button from "../button/Button";
import styles from "./FolderMenuList.module.css";
import Plus from "@/public/images/plus.svg";
import { useRouter } from "next/router";
import { FolderMenuListProps } from "@/types/folderMenuListTypes";

export default function FolderMenuList({
  folderMenu,
  folderId,
}: {
  folderMenu: FolderMenuListProps[] | undefined;
  folderId: string | undefined;
}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {folderMenu?.map((item) => {
          const { id, name } = item;

          let isActive = false;
          if (id === Number(folderId)) {
            isActive = true;
          }

          return (
            <Button
              isActive={isActive}
              onClick={() => {
                if (id === 0) {
                  router.push("/folder");
                  return;
                }
                router.push(`/folder/${id}`);
              }}
              key={id}
            >
              {name}
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
