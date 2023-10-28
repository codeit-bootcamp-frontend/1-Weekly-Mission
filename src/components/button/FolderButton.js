import React from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { getEachfoldersData } from "../../api/folder";

export default function FolderButton({ data, dataKeys, onClickFunc }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        <Button
          name="total"
          onClickFunc={() => {
            navigate("/folder");
          }}
        >
          전체
        </Button>
        {data &&
          data.map((item) => {
            // console.log(item) 타이이밍이 이상한데?
            console.log(item);
            return dataKeys.map((key) => {
              if (key === 168) {
                item[key].folderName = "코딩 팁";
              }
              if (key === 24) {
                return;
              }

              return (
                <Button
                  name={key}
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
