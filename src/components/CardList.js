import styles from "../styles/CardList.module.css";
import CardItem from "./CardItem";

const CardList = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <ul className={styles.CardList}>
        {links.map((data) => (
          <li key={data.id}>
            <CardItem item={data} />
          </li>
        ))}
      </ul>
    );
  }
};

export default CardList;
