import styles from './SharedFolder.module.css';
import Card from '../Card/Card';

function SharedFolder({ cards, shared }) {
  const dotRemover = {
    listStyleType: 'none',
  };

  return (
    <article className={styles.root}>
      {cards.map((card) => {
        return (
          <li style={dotRemover} key={card.id}>
            <Card card={card} shared={shared} />
          </li>
        );
      })}
    </article>
  );
}
export default SharedFolder;
