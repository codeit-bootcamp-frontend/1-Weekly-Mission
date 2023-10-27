import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
import NothingPage from "../../pages/NothingPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEachfoldersData } from "../../api/folder";
import LocaleContext from "../../contexts/LocaleContext";
import { useContext } from "react";
export default function FolderButton({ data, dataKeys, onClickFunc }) {
  const navigate = useNavigate();
  const value = useContext(LocaleContext);
  const keys = Object.keys(value);
  const { folderId } = useParams();
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
            return dataKeys.map((key) => {
              return (
                <Button
                  name={key}
                  key={key}
                  onClickFunc={() => {
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
