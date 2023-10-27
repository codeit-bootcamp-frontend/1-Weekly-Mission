import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
import NothingPage from "../../pages/NothingPage";
import { Link, useNavigate } from "react-router-dom";
import { getEachfoldersData } from "../../api/folder";
import LocaleContext from "../../contexts/LocaleContext";
import { useContext } from "react";
export default function FolderButton({ data, dataKeys, onClickFunc }) {
  const navigate = useNavigate();
  const value = useContext(LocaleContext);
  // console.log(value);
  // const [content, setContent] = useState();

  // const handleClickButton = (e) => {
  //   //console.log(e.target.name);
  //   setContent(e.target.name);
  // };

  // const selectComponent = {
  //   first: <First />,
  //   second: <Second />,
  //   third: <Third />,
  //   fourth: <Fourth />,
  //   fifth: <Fifth />,
  // };

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
                    if (key === 14) {
                      navigate("/nothing");
                    }
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
