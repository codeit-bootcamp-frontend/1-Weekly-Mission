import { calculateTimePassed, getDate } from '../functions/calculateDate';
import DEFAULT_IMAGE from '../assets/images/linkbrary.png';

function Card({ data }) {
  const { url, title, description, createdAt, imageSource } = data;

  const timePassed = calculateTimePassed(createdAt);
  const createdDate = getDate(createdAt);

  const reduceDescription = (description) => {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    } else {
      return description;
    }
  };

  return (
    <a href={url} target='_blank' className='card'>
      <div className='card__img-container'>
        <img
          src={imageSource ? imageSource : DEFAULT_IMAGE}
          alt='링크 이미지'
          className='card__img'
        />
      </div>
      <div className='card__text'>
        <p className='card__time-passed'>{timePassed}</p>
        <p className='card__title'>{title}</p>
        <p className='card__description'>{reduceDescription(description)}</p>
        <p className='card__date'>{createdDate}</p>
      </div>
    </a>
  );
}

export default Card;
