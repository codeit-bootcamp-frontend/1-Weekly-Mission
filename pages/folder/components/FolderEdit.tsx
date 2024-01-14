import useToggle from "@/hooks/useToggle";
import styles from "./FolderEdit.module.css";
import Image from "next/image";
import { MouseEvent } from "react";
import FolderModal from "./FolderModal";

function FolderEdit({ title }: { title: string }) {
  const shareFolderButton = useToggle();
  const changeFolderNameButton = useToggle();
  const deleteFolderButton = useToggle();

  return (
    <>
      <div className={styles.root}>
        <button
          className={styles.button}
          type="button"
          onClick={(e: MouseEvent) => {
            shareFolderButton.handleToggle(e);
          }}
        >
          <Image width={18} height={18} src="/icons/share.svg" alt="" />
          공유
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={(e: MouseEvent) => {
            changeFolderNameButton.handleToggle(e);
          }}
        >
          <Image width={18} height={18} src="/icons/pen.svg" alt="" />
          이름 변경
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={(e: MouseEvent) => {
            deleteFolderButton.handleToggle(e);
          }}
        >
          <Image width={18} height={18} src="/icons/bin.svg" alt="" />
          삭제
        </button>
      </div>

      <FolderModal
        title={title}
        shareFolder={shareFolderButton}
        changeFolderName={changeFolderNameButton}
        deleteFolder={deleteFolderButton}
      />
    </>
  );
}

export default FolderEdit;
