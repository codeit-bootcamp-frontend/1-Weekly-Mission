import Card from './Card';
import '../styles/CardList.css';
export default function CardList({ cards }) {
  return (
    <div className='card-list'>
      {cards.map((card) => (
        <Card value={card} key={card.title} />
      ))}
    </div>
  );
}
