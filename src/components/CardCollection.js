import "../styles/reset.css";
import Card from "./Card.js";

function CardCollection({ cardItems }) {
  return (
    <>
      {cardItems.map((card) => {
        return <Card item={card} key={card.id} />;
      })}
    </>
  );
}

export default CardCollection;
