import style from "./Cards.module.css";
import Card from "../Card/Card";

function Cards({ cards }) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            description={card.description}
            url={card.url}
            image_source={card.image_source}
            created_at={card.created_at}
            key={card.id}
          />
        );
      })}
    </article>
  );
}
export default Cards;
