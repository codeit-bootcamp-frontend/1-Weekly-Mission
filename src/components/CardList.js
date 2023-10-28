import Card from "./Card";

import "./CardList.css";

const CardList = ({ cards }) => {
  return (
    <div className="card-list-wrapper">
      <div className="card-list">
        {cards.map((card) => (
          <Card value={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};
export default CardList;
