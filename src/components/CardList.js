import Card from './Card';
import './CardList.css';
export function CardList({ cards }) {
  return (
    <div className='card-list'>
      {cards.map((card) => (
        <Card value={card} key={card.id} />
      ))}
    </div>
  );
}
