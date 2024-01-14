import Layout from "@/components/Layout/Layout";
import LinkAddBar from "@/components/LinkAddBar/LinkAddBar";

import styles from "./FolderPage.module.scss";

export default function FolderPage() {
  return (
    <Layout>
      <LinkAddBar />
      <div className={styles["folder-content"]}></div>
    </Layout>
  );
}
