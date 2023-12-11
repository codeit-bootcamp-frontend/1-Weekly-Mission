import styles from "styles/PageStyle.module.css";
import Cards from "../components/Cards";
import Search from "../components/Search";
import { getUserFolder } from "../utils/api";
import { useEffect, useState } from "react";
import FolderInfo from "../components/FolderInfo";

function SharedPage() {
  const [state, setState] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  async function handleList() {
    const { links } = await getUserFolder();
    setState(links);
    const folderData = await getUserFolder();
    setFolderInfo(folderData);
  }

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      <section className={styles.sharedSection}>
        <FolderInfo folderInfo={folderInfo} />
        <ul className={styles.cardsList}>
          <Search />
          <div className={styles.cards}>
            {state.map((cardInfo) => {
              return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
            })}
          </div>
        </ul>
      </section>
    </>
  );
}

export default SharedPage;
