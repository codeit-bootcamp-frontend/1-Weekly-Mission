import styles from "./dialogInput.module.css";

interface DialogInputProps {
  value?: string | undefined;
}

export default function DialogInput({ value }: DialogInputProps) {
  return (
    <input
      className={styles.dialogInput}
      value={value}
      placeholder="내용 입력"
    />
  );
}
