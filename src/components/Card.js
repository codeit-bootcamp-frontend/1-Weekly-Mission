import "../styles/card.css";

function Card(card) {
  console.log(card);
  const { createdAt, url, title, description, imageSource } = card.card;
  return (
    <a href={url} className="card-link">
      <div className="card-img-section">
        <img src={imageSource} alt={title} className="sample-img" />
      </div>
      <div className="card-text-section">
        <p className="time-stamp">{createdAt}</p>
        <p className="introduce-text">{description}</p>
        <p className="created-date">{createdAt}</p>
      </div>
    </a>
  );
}

function CardList({ cardList }) {
  if (!cardList) {
    return <div className="no-card-list"> 저장된 카드가 없습니다.</div>;
  }
  return (
    <div>
      {cardList.map((card) => {
        return (
          <div key={card.id} className="card">
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
