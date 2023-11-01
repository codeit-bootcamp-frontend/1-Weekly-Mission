import styles from "./CardList.module.css";
import NotFoundLink from "./NotFoundLink";
import SharedPageCardItem from "./SharedPageCardItem";
import FolderPageCardItem from "./FolderPageCardItem";

const CardList = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <ul className={styles.CardList}>
        {links.map((item) => (
          <li key={item.id}>
            <SharedPageCardItem item={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (folderData && folderData.data) {
    const { data } = folderData;
    if (data.length === 0) return <NotFoundLink />;

    return (
      <ul className={styles.CardList}>
        {data.map((item) => (
          <li key={item.id}>
            <FolderPageCardItem item={item} />
          </li>
        ))}
      </ul>
    );
  }
};

export default CardList;
