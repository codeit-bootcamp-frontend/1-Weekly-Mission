import Card from 'components/Card/Card';
import styles from './CardList.module.css';

function CardList({ card, visibleCardButton }) {
  return (
    <div className={styles.wrapper}>
      {card.map((val) => (
        <Card key={val.id} data={val} visibleCardButton={visibleCardButton} />
      ))}
    </div>
  );
}

export default CardList;
