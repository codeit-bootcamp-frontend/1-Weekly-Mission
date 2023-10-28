import { AddBar, SearchBar } from "components";
import styles from "./FolderPage.module.css";

const FolderPage = () => {
  return (
    <>
      <header className={styles.header}>
        <AddBar />
      </header>
      <article className={styles.article}>
        <SearchBar />
      </article>
    </>
  );
};

export default FolderPage;
