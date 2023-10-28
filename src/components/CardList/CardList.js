import CardForm from 'components/CardForm/CardForm';
import styles from './CardList.module.css';

function CardList({ cardData }) {
  return (
    <div className={styles.wrapper}>
      {cardData.map((card) => (
        <CardForm key={card.id} data={card} />
      ))}
    </div>
  );
}

export default CardList;
