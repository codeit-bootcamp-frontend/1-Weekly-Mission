import styles from "@/styles/LoLink.module.css";

function NoLink() {
  return (
    <div className={styles.NoLinkBox}>
      <p>저장된 링크가 없습니다.</p>
    </div>
  );
}

export default NoLink;
