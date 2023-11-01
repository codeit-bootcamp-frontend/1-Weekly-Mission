import styles from "./Card.module.css";
import CardList from "./CardList";

const Card = ({ folderData }) => {
  return (
    <div className={styles.card}>
      <CardList folderData={folderData} />
    </div>
  );
};

export default Card;
