import "./Card.style.css";

import noImage from "../../assets/no-img-card.svg";

import formatDate from "../../utils/formatDate";
import calcDate from "../../utils/calcDate";

function Card(card) {
  const { createdAt, url, title, description, imageSource } = card.card;
  const str = calcDate(createdAt);
  return (
    <a href={url} className="card-link">
      <div className="card-img-section">
        <img
          src={imageSource ? imageSource : noImage}
          alt={title}
          className="sample-img"
        />
      </div>
      <div className="card-text-section">
        <p className="time-stamp">{str}</p>
        <p className="introduce-text">{description}</p>
        <p className="created-date">{formatDate(createdAt)}</p>
      </div>
    </a>
  );
}

function CardList({ cardList }) {
  if (!cardList) {
    return <div className="no-card-list"> 저장된 카드가 없습니다.</div>;
  }
  return (
    <>
      {cardList.map((card) => {
        return (
          <div key={card.id} className="card">
            <Card card={card} />
          </div>
        );
      })}
    </>
  );
}

export default CardList;
