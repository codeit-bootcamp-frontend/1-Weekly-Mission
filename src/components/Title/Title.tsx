import styles from "src/components/Title/Title.module.css";

function Title({ folderName, children }: TitleProps) {
  return (
    <div className={styles.titleWrapper}>
      <p className={styles.title}>{folderName}</p>
      {children}
    </div>
  );
}

export default Title;
