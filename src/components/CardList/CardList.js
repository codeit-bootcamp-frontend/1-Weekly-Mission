import Card from "../Card/Card";
import "./CardList.style.css";

function CardList({ cardList }) {
  if (!cardList) {
    return <div className="no-card-list"> 저장된 카드가 없습니다.</div>;
  }
  return (
    <>
      {cardList.map((card) => {
        return (
          <div key={card.id} className="card">
            <Card card={card} />
          </div>
        );
      })}
    </>
  );
}

export default CardList;
