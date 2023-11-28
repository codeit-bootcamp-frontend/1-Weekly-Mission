import checkIcon from "../assets/images/checkIcon.svg";
import styles from "./AddLinkToFolder.module.css";
import ModalHeader from "../components/ModalHeader/ModalHeader";
import Button from "../components/Button/Button";
import { ReactNode } from "react";

type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

interface Props {
  folderLists: Folder[];
  children: ReactNode;
}

function AddLinkToFolder({ folderLists, children }: Props) {
  return (
    <>
      <ModalHeader title="폴더에 추가" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} noValidate>
          <div>
            {folderLists.map((list) => {
              return (
                <div key={list.id}>
                  <input className={styles.input} type="radio" id={list.name} name="folder" value={list.id} />
                  <label htmlFor={list.name} className={styles.label}>
                    <div className={styles.container}>
                      <p className={styles.folderName}>{list.name}</p>
                      <span className={styles.linkLength}>{list.link.count}개 링크</span>
                    </div>
                    <img className={styles.labelImg} src={checkIcon} alt="" />
                  </label>
                </div>
              );
            })}
          </div>
          <Button>추가하기</Button>
        </form>
      </div>
    </>
  );
}

export default AddLinkToFolder;
