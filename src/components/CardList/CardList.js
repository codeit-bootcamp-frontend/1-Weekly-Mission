import Card from "../Card/Card";
import "./CardList.style.css";

function CardList({ cardList }) {
  if (cardList.length === 0) {
    return <div className="no-card-list"> 저장된 링크가 없습니다.</div>;
  }
  return (
    <section className="card-section">
      {cardList.map((card) => {
        return (
          <div key={card.id} className="card">
            <Card card={card} />
          </div>
        );
      })}
    </section>
  );
}

export default CardList;
