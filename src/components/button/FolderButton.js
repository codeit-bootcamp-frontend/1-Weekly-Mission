import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { getEachfoldersData } from "../../api/folder";

export default function FolderButton({ data, dataKeys }) {
  // navigate를 하게 되면은 component가 새롭게 mount된다.

  console.log(data, dataKeys);
  const navigate = useNavigate();
  const params = useParams();

  const folderId = params.folderId; // undefined면

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {/* 버튼 안에 className, name, onCLckfunction은운 prop으로 내려준것이기 때문에 
          이에 해당하는 styling은 Button.module.js에서 한다
        */}
        <Button
          // className={styles.active__button}
          isActive={!folderId}
          onClickFunc={(e) => {
            navigate("/folder");
          }}
        >
          전체
        </Button>
        {data &&
          data.map((item) => {
            return dataKeys.map((key) => {
              if (key === 168) {
                item[key].folderName = "코딩 팁";
              }
              if (key === 24) {
                return;
              }
              return (
                <Button
                  isActive={Number(folderId) === key}
                  // className={styles.active__button}
                  className={item[key].folderId}
                  key={key}
                  onClickFunc={() => {
                    // custom훅을 사용할수가 없어서 API를 사용
                    getEachfoldersData({ folderId: key }).then((data) => {
                      let boolean = data.length > 0;
                      if (boolean) {
                        navigate(`/folder/${key}`);
                      } else if (!boolean) {
                        navigate("/folder/nothing");
                      }
                    });
                  }}
                >
                  {item[key].folderName}
                </Button>
              );
            });
          })}
      </div>

      <Button
        className={styles.add__button}
        onClickFunc={() => alert("추후기능만들예정")}
      >
        폴더추가
      </Button>
    </div>
  );
}
