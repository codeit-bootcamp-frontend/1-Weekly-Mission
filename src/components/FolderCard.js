import { Link } from 'react-router-dom';
import { dateCalculator } from './dateCalculator';
import noImage from './img/no-image.svg';
import kebab from './img/kebab.svg';
import star from './img/star.svg';

export default function FolderCard(link) {
  const apiDate = new Date(link.item.created_at);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();

  if (link.item.image_source === undefined || link.item.image_source === null) {
    link.item.image_source = noImage;
  }

  return (
    <Link to={link.item.url} className="card-wrapper" target="_blank">
      <div className="card-box">
        <div className="card-img-div">
          <img
            className="card-img"
            src={link.item.image_source}
            alt={link.item.title}
          />
        </div>
        <div className="card-text">
          <div className="card-time-div">
            <div className="card-time-ago">{elapsedTime}</div>

            <img src={kebab} alt="kebabImg" />
          </div>

          <div className="text-description">{link.item.description}</div>
          <div className="card-year">{`${year}. ${month}. ${days}`}</div>
        </div>
        <img src={star} className="star-img" alt="starImg" />
      </div>
    </Link>
  );
}
