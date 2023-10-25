import Card from "./Card.jsx";
import styles from "./Card.module.css";

const CardList = ({ cards }) => {
  return (
    <div className={styles.cardList}>
      {cards && cards.map((card) => <Card key={card.id} items={card} />)}
    </div>
  );
};

export default CardList;
