import styles from '../styles/modules/cardList.module.css';
import CardForm from './CardForm';

function CardList({ cardData }) {
  const { links } = cardData;
  return (
    <div className={styles.wrapper}>
      {links.map((card) => (
        <CardForm
          key={card.id}
          createdAt={card.createdAt}
          content={card.description}
          imgUrl={card.imageSource}
          url={card.url}
        />
      ))}
    </div>
  );
}

export default CardList;
