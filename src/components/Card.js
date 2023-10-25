import styles from "../styles/Card.module.css";
import CardList from "./CardList";

const Card = ({ folderData }) => {
  return (
    <div className={styles.Card}>
      <CardList folderData={folderData} />
    </div>
  );
};

export default Card;
