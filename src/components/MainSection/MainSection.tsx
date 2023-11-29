import styles from "src/components/MainSection/MainSection.module.css";

function MainSection({ children }: Children) {
  return (
    <main>
      <div className={styles.mainSection}>{children}</div>
    </main>
  );
}

export default MainSection;
