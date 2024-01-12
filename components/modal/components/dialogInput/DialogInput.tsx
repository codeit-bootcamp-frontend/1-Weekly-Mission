import { ChangeEvent } from "react";
import styles from "./dialogInput.module.css";

interface DialogInputProps {
  value?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function DialogInput({ value, onChange }: DialogInputProps) {
  return (
    <input
      className={styles.dialogInput}
      placeholder="내용 입력"
      onChange={onChange}
    />
  );
}
