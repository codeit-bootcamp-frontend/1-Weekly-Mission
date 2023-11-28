import { ButtonHTMLAttributes } from "react";
import addIcon from "../../assets/images/add.svg";
import styles from "./FolderAddMenu.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function FolderAddMenu({ onClick }: Props) {
  return (
    <button className={styles.root} type="button" onClick={onClick}>
      폴더 추가 <img src={addIcon} alt="" />
    </button>
  );
}

export default FolderAddMenu;
