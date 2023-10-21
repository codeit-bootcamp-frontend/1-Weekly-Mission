import { calculateTimePassed, getDate } from '../functions/calculateDate';
import DEFAULT_IMAGE from '../assets/images/linkbrary.png';

function Card({ data }) {
  const { url, title, description, createdAt, imageSource } = data;

  const timePassed = calculateTimePassed(createdAt);
  const createdDate = getDate(createdAt);

  const reduceText = (text, length) => {
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    } else {
      return text;
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
        <p className='card__title'>{reduceText(title, 70)}</p>
        <p className='card__description'>{reduceText(description, 100)}</p>
        <p className='card__date'>{createdDate}</p>
      </div>
    </a>
  );
}

export default Card;
