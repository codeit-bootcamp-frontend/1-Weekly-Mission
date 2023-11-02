import style from "./Cards.module.css";
import Card from "./Card";

function SharedPageCards({ cards }) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            description={card.description}
            url={card.url}
            image_source={card.imageSource}
            created_at={card.createdAt}
            key={card.id}
          />
        );
      })}
    </article>
  );
}
export default SharedPageCards;
