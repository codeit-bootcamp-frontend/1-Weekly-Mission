import styles from "./AddLinkToFolder.module.css";
import Button from "../components/Button/Button";
import { ReactNode } from "react";
import Image from "next/image";
import ModalHeader from "./ModalHeader/ModalHeader";
import { FolderInfo } from "@/API/getCurrentUsersFolderData";

interface Props {
  folderList: FolderInfo[];
  children: ReactNode;
}

function AddLinkToFolder({ folderList, children }: Props) {
  return (
    <>
      <ModalHeader title="폴더에 추가" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} noValidate>
          <div>
            {folderList.map((list) => {
              return (
                <div key={list.id}>
                  <input className={styles.input} type="radio" id={list.name} name="folder" value={list.id} />
                  <label htmlFor={list.name} className={styles.label}>
                    <div className={styles.container}>
                      <p className={styles.folderName}>{list.name}</p>
                      <span className={styles.linkLength}>{list.link.count}개 링크</span>
                    </div>
                    <Image
                      width={14}
                      height={14}
                      className={styles.labelImg}
                      src="/images/icon/common-icons/checkIcon.svg"
                      alt=""
                    />
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
