import React, { useContext } from "react";
import Button from "../button/Button";
import styles from "./FolderMenuList.module.css";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";

export default function FolderMenuList() {
  const { LinkSDataArr, folderIdKey } = useContext(LocaleContext);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {LinkSDataArr?.map((item) => {
          let { folderId, folderName } = item;
          // 전체의 folderId는 ""
          let isActive = false;
          if (folderId.toString() === folderIdKey) {
            isActive = true;
          }
          if (folderId === "" && !folderIdKey) {
            isActive = true;
          }

          return (
            <Button
              isActive={isActive}
              onClick={() => {
                navigate(`/folder/${folderId}`);
              }}
              key={item.folderId}
            >
              {folderName}
            </Button>
          );
        })}
      </div>
      <div className={styles.add__folder__button}>
        <Button onClick={() => alert("추후기능만들예정")}>폴더추가</Button>
      </div>
    </div>
  );
}
