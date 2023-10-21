import './Main.css';
import noImage from './img/no-image.svg';
import { dateCalculator } from './dateCalculator';

export default function Card(item) {
  const apiDate = new Date(item.item.createdAt);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();
  let image = {};
  if (item.item.imageSource === undefined) {
    image = {
      backgroundImage: `url(${noImage})`,
    };
  } else {
    image = {
      backgroundImage: `url(${item.item.imageSource})`,
    };
  }
  return (
    <a href={item.item.url} className="card-wrapper">
      <div className="card-box">
        <div className="card-image" style={image}></div>
        <div className="card-text">
          <div className="card-time-ago">{elapsedTime}</div>
          <div className="text-description">{item.item.description}</div>
          <div className="card-year">{`${year}. ${month}. ${days}`}</div>
        </div>
      </div>
    </a>
  );
}
