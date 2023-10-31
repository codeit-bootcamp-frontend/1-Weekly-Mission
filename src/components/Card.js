import styles from "../styles/Card.module.css";
import CardList from "./CardList";

const Card = ({ folderData, isLoading }) => {
  return (
    <div className={styles.Card}>
      <CardList folderData={folderData} isLoading={isLoading} />
    </div>
  );
};

export default Card;
