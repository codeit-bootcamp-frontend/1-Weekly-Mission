import Card from "./Card.jsx";

const CardList = ({ cards, hasDetails }) => {
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
            hasDetails={hasDetails}
          />
        ))}
    </div>
  );
};

export default CardList;
