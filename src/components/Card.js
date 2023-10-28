import './css/Card.css';
import noImage from './img/no-image.svg';
import { dateCalculator } from './dateCalculator';

export default function Card(item) {
  const apiDate = new Date(item.item.createdAt);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();

  if (item.item.imageSource === undefined) {
    item.item.imageSource = noImage;
  }

  return (
    <a
      href={item.item.url}
      className="card-wrapper"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-box">
        <div className="card-img-div">
          <img
            className="card-img"
            src={item.item.imageSource}
            alt={item.item.title}
          />
        </div>
        <div className="card-text">
          <div className="card-time-ago">{elapsedTime}</div>
          <div className="text-description">{item.item.description}</div>
          <div className="card-year">{`${year}. ${month}. ${days}`}</div>
        </div>
      </div>
    </a>
  );
}
