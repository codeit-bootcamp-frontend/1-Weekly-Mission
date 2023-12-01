import style from "./Cards.module.css";
import Card from "../Card/Card";

interface SharePageCardsProps {
  cards: SharePageCard[];
}
interface SharePageCard {
  title: string;
  description: string;
  url: string;
  imageSource: string;
  createdAt: string;
  id: number;
}

function SharedPageCards({ cards }: SharePageCardsProps) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            description={card.description}
            url={card.url}
            imageSource={card.imageSource}
            createdAt={card.createdAt}
            key={card.id}
          />
        );
      })}
    </article>
  );
}
export default SharedPageCards;
