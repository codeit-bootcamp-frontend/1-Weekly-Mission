import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards &&
        cards.map((card) => (
          <Card
            key={card.id}
            className={"Card"}
            createdAt={card.createdAt}
            description={card.description}
            id={card.id}
            imgUrl={card.imageSource}
            title={card.title}
            url={card.url}
          />
        ))}
    </div>
  );
};

export default CardList;
