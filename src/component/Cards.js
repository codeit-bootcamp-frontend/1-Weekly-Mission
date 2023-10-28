import style from "./Cards.module.css";
import Card from "./Card";

function Cards({ cards }) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </article>
  );
}
export default Cards;
