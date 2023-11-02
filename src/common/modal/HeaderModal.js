import React, { useContext } from "react";
import styles from "./HeaderModal.module.css";
import LocaleContext from "../../contexts/LocaleContext";

import { fetchUserLinks } from "./../../api/users";

export default function HeaderModal({ setterFunc, inputLink = null }) {
  // modal이 pop-up될때 나온다

  const USER_ID = 1;
  const obj = useContext(LocaleContext);

  const obj_keys = Object.keys(obj).map(Number);

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

  // Wait for all promises to resolve

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
          const [, name, linksNum] = Object.values(obj[key]);

          return (
            <p>
              {name} : {linksNum && linksNum.length}
            </p>
          );
        })}

        <button className={styles.button}>추가하기</button>
      </div>
    </div>
  );
}
