import React, { useContext } from "react";
import styles from "./HeaderModal.module.css";
import LocaleContext from "../../contexts/LocaleContext";

import { fetchUserLinks } from "./../../api/users";
import { useLocation } from "react-router-dom";

export default function HeaderModal({ setterFunc, inputLink = null }) {
  // modal이 pop-up될때 나온다

  const USER_ID = 1;
  const { ObjectValue: obj, LinkSDataArr: linkData } =
    useContext(LocaleContext);

  const obj_keys = Object.keys(obj);

  obj_keys.map((key) => {
    fetchUserLinks({ userId: USER_ID, folderId: key }).then((data) => {
      const folderLinksData = data.data; // array
      if (obj[key]) {
        obj[key] = {
          ...obj[key],
          data: folderLinksData,
        };
      }
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button
          className={styles.cancel__button}
          onClick={() => setterFunc(false)}
        >
          X
        </button>
        <p className={styles.title}>폴더에추가</p>
        <p>{inputLink}</p>

        {obj_keys.map((key) => {
          const [, name, linksArr] = Object.values(obj[key]);
          return (
            <p>
              {name} : {linksArr && linksArr.length}
            </p>
          );
        })}

        <button className={styles.button}>추가하기</button>
      </div>
    </div>
  );
}
