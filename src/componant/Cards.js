import styles from './Cards.module.css';
import Card from './Card/Card';

function Cards({ cards }) {
  const dotRemover = {
    listStyleType: 'none',
  };

  return (
    <article className={styles.root}>
      {cards.map((card) => {
        return (
          <li style={dotRemover} key={card.id}>
            <Card card={card} />
          </li>
        );
      })}
    </article>
  );
}
export default Cards;
