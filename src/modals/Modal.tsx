import styles from "./Modal.module.css";
import closeIcon from "../assets/images/closeIcon.svg";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Modal({ children, onClick }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.relative}>
        <button onClick={onClick} type="button" className={styles.button}>
          <img src={closeIcon} alt="" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
