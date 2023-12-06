import style from "./Cards.module.css";
import Card from "../Card/Card";

interface Card {
  title: string;
  description: string;
  url: string;
  image_source: string;
  created_at: string;
  id: number;
}

interface CardsProps {
  cards: Card[];
}
function FolderPageCards({ cards }: CardsProps) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            description={card.description}
            url={card.url}
            imageSource={card.image_source}
            createdAt={card.created_at}
            key={card.id}
          />
        );
      })}
    </article>
  );
}
export default FolderPageCards;
