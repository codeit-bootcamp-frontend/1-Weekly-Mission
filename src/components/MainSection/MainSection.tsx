import { PropsWithChildren } from "react";
import styles from "src/components/MainSection/MainSection.module.css";

function MainSection({ children }: PropsWithChildren) {
  return (
    <main>
      <div className={styles.mainSection}>{children}</div>
    </main>
  );
}

export default MainSection;
