import './CardList.css'
import TimeFlow from './TimeFlow';
import defaultFileImg from '../../assets/nofileimg.png'

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource = defaultFileImg, title, description, createdAt }) {

  return (
    <>
      <div className='card__imgbox'>
        <img className="card__img" src={imageSource} alt='카드 이미지' />
      </div>
      <div className="card__text">
        <div className="card__timeDiff"><TimeFlow createdAt={createdAt} /></div>
        <h3 className='font-size14'>{title}</h3>
        <p>{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
    </>
  )
}

function CardList({ links = [] }) {
  return (
    <div className="cardlist">
      {links.map(link => (
        <div key={link.id} className="card" >
          <Card {...link} />
        </div>
      ))}
    </div>
  )
}

export default CardList