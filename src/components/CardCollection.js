import "../styles/reset.css";
import Card from "./Card.js";

function CardCollection({ cardItems, openMAF }) {
  return (
    <>
      {cardItems.map((card) => {
        return <Card item={card} key={card.id} openMAF={openMAF} />;
      })}
    </>
  );
}

export default CardCollection;
