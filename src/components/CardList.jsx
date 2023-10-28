import Card from './Card';
import '../css/cardList.css';

function CardList({ cards }) {
  return (
    <>
      <div className="card-list">
        {cards.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default CardList;
