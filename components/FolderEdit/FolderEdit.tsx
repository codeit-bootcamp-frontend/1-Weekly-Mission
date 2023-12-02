import styles from "./FolderEdit.module.css";
import { ButtonHTMLAttributes, Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";
import Image from "next/image";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: MouseEvent | FormEvent) => void;
  setTarget: Dispatch<SetStateAction<string | null | undefined>>;
}

function FolderEdit({ onClick, setTarget }: Props) {
  const handleClick = (e: MouseEvent | FormEvent, targetName: string) => {
    onClick(e);
    setTarget(targetName);
  };

  return (
    <div className={styles.root}>
      <button className={styles.button} type="button" onClick={(e) => handleClick(e, "shareFolder")}>
        <Image width={18} height={18} src="/images/icon/navigation-icons/share.svg" alt="" />
        공유
      </button>
      <button className={styles.button} type="button" onClick={(e) => handleClick(e, "changeFolderName")}>
        <Image width={18} height={18} src="/images/icon/navigation-icons/pen.svg" alt="" />
        이름 변경
      </button>
      <button className={styles.button} type="button" onClick={(e) => handleClick(e, "deleteFolder")}>
        <Image width={18} height={18} src="/images/icon/navigation-icons/bin.svg" alt="" />
        삭제
      </button>
    </div>
  );
}

export default FolderEdit;
