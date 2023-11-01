import Card from 'components/Card/Card';
import styles from './CardList.module.css';

function CardList({ card, isCardEditable }) {
  return (
    <div className={styles.wrapper}>
      {card.map((val) => (
        <Card key={val.id} card={val} isCardEditable={isCardEditable} />
      ))}
    </div>
  );
}

export default CardList;
