import React from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function FolderButton({ mappedResult, objKeys, folderId }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {/* <Button
          onClick={(e) => {
            navigate("/folder");
          }}
        >
          전체
        </Button> */}
        {mappedResult?.map((item) => {
          let { folderId, folderName } = item;
          return (
            <Button
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
