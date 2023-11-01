import styles from './Binder.module.css';
import Card from '../Card/Card';

function Binder({ cards, shared }) {
  return (
    <article className={styles.root}>
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <Card card={card} shared={shared} />
          </li>
        );
      })}
    </article>
  );
}
export default Binder;
