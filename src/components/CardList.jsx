import Card from './Card';
import '../css/cardList.css';
import NoSavedLinks from './NoSavedLinks';

function CardList({ cards }) {
  if (!cards) {
    return <></>;
  }
  if (cards.length === 0) {
    return <NoSavedLinks />;
  }
  return (
    <>
      <div className="container">
        <div className="card-list">
          {cards.map((card) => {
            return (
              <li key={card.id}>
                <Card card={card} />
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardList;
