import { calculateTimePassed, getDate } from '../functions/calculateDate';

function Card({ data }) {
  const { url, title, description, createdAt, imageSource } = data;

  const timePassed = calculateTimePassed(createdAt);
  const createdDate = getDate(createdAt);

  return (
    <a href={url}>
      <img src={imageSource} alt='링크 이미지' />
      <div>{timePassed}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{createdDate}</div>
    </a>
  );
}

export default Card;
