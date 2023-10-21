import './Card.css'
import TimeFlow from './TimeFlow';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource, title, description, createdAt }) {

  return (
    <div className="card">
      <div className='card__imgbox'>
        <img className="card__img" src={imageSource} alt='카드 이미지' />
      </div>
      <div className="text">
        <div className="timeDiff"><TimeFlow createdAt={createdAt} /></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  )
}

function CardList({ links = [] }) {
  return (
    <div className="cardlist">
      {links.map(link => <Card {...link} />)}
    </div>
  )
}

export default CardList