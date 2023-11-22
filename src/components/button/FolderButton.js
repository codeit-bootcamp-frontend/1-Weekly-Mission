import React from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function FolderButton({ mappedResult, folderIdKey }) {
  const navigate = useNavigate();
  const a = useParams();
  // folderIdKey의 type은 string이다
  // 전체 메뉴탭일때 folderIdKey는 undefined
  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {mappedResult?.map((item) => {
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
      <Button
        className={styles.add__button}
        onClick={() => alert("추후기능만들예정")}
      >
        폴더추가
      </Button>
    </div>
  );
}
