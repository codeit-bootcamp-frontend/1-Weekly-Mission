import styles from "../styles/CardList.module.css";
import CardItem from "./CardItem";
import CardItemSkeleton from "./CardItemSkeleton";
import NotFoundLink from "./NotFoundLink";

const CardList = ({ folderData, isLoading }) => {
  if (isLoading) {
    return (
      <ul className={styles.CardList}>
        {Array(9)
          .fill()
          .map((_, index) => (
            <li key={index}>
              <CardItemSkeleton />
            </li>
          ))}
      </ul>
    );
  }

  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <ul className={styles.CardList}>
        {links.map((item) => (
          <li key={item.id}>
            <CardItem item={item} />
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
            <CardItem item={item} />
          </li>
        ))}
      </ul>
    );
  }
};

export default CardList;
