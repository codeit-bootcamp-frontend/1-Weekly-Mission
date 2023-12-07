import { ButtonHTMLAttributes, Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";
import styles from "./FolderAddMenu.module.css";
import Image from "next/image";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  modal: {
    handleClick: (e: MouseEvent | FormEvent) => void;
    setTarget: Dispatch<SetStateAction<string | null | undefined>>;
  };
}

function FolderAddMenu({ modal }: Props) {
  const { handleClick: onClick, setTarget } = modal;

  const handleClick = (e: MouseEvent | FormEvent) => {
    onClick(e);
    setTarget("AddFolder");
  };

  return (
    <button className={styles.root} type="button" onClick={handleClick}>
      폴더 추가 <Image width={16} height={16} src="/images/icon/navigation-icons/add.svg" alt="" />
    </button>
  );
}

export default FolderAddMenu;
