import Card from "./Card.jsx";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards && cards.map((card) => <Card key={card.id} items={card} />)}
    </div>
  );
};

export default CardList;
