import "../styles/card.css";
import noImage from "../assets/no-img-card.svg";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function calcDate(value) {
  const now = new Date(); // 현재 날짜 및 시간
  const createdDate = new Date(value);

  let minutes = (now - createdDate) / 1000 / 60;
  if (minutes < 2) {
    return `1 minute ago`;
  } else if (minutes < 60) {
    return `${Math.floor(minutes)} minutes ago`;
  }

  let hours = minutes / 60;
  if (hours < 2) {
    return `1 hour ago`;
  } else if (hours < 24) {
    return `${Math.floor(hours)} hours ago`;
  }

  let days = hours / 24;
  if (days < 2) {
    return `1 day ago`;
  } else if (days < 31) {
    return `${Math.floor(days)} days ago`;
  }

  let months = days / 31;
  if (months < 2) {
    return `1 month ago`;
  } else if (months < 12) {
    return `${Math.floor(months)} months ago`;
  }

  let years = months / 12;
  if (years < 2) {
    return `1 year ago`;
  } else {
    return `${Math.floor(years)} years ago`;
  }
}
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
