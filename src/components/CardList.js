import styles from "../styles/CardList.module.css";
import CardItem from "./CardItem";
import CardItemSkeleton from "./CardItemSkeleton";

const CardList = ({ folderData, isLoading }) => {
  if (isLoading) {
    return (
      <ul className={styles.CardList}>
        {Array(9)
          .fill()
          .map((_, index) => (
            <CardItemSkeleton key={index} />
          ))}
      </ul>
    );
  }
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
