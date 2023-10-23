import '../styles/cardlist.css';
import TimeFlow from '../timeflow.js';
import defaultImg from '../assets/images/no-Image.svg';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource = defaultImg, title, description, createdAt, url }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card_imgbox">
        <img className="card_img" src={imageSource} alt="카드 이미지" />
      </div>
      <div className="text">
        <TimeFlow createdAt={createdAt} />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="createAt">{formatDate(createdAt)}</div>
      </div>
    </a>
  );
}

function CardList({ links = [] }) {
  return (
    <div className="card_list">
      {links.map((link) => (
        <Card {...link} />
      ))}
    </div>
  );
}

export default CardList;
