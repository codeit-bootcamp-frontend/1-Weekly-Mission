import styles from "./PageContainer.module.scss";

export default function PageContainer({ ...props }) {
  return <div className={styles["page__container"]} {...props} />;
}
