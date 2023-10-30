import Card from './Card';
import '../css/cardList.css';

function CardList({ cards }) {
  if (!cards) {
    return <div> 잘못된 접근입니다.</div>;
  }
  if (cards.length === 0) {
    return <div> 저장된 링크가 없습니다.</div>;
  }
  return (
    <>
      <div className="card-list">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card card={card} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default CardList;
