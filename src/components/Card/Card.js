import "./Card.style.css";
import { useState } from "react";
import noImage from "../../assets/no-img-card.svg";

import formatDate from "../../utils/formatDate";
import calcDate from "../../utils/calcDate";

function Card(card) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { created_at, url, title, description, image_source } = card.card;
  const str = calcDate(created_at);
  return (
    <a
      href={url}
      className="card-link"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="card-img-section">
        <img
          src={image_source ? image_source : noImage}
          alt={title}
          className={isHovering ? "sample-img-bigger sample-img" : "sample-img"}
        />
      </div>
      <div className="card-text-section">
        <p className="time-stamp">{str}</p>
        <p className="introduce-text">{description}</p>
        <p className="created-date">{formatDate(created_at)}</p>
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
