import { formatDateDifference, formatDate } from '../utils';
import '../../globalStyles.css'
import './Card.css';
import EmptyCardImg from './Card_img.svg'
import kebab from './kebab.svg';

const Cards = ( { folderCards } ) => {
  return (
    <>
      {folderCards.map((item) => {
        return (
          <div key={item.id}>
            <Card item={item} />
          </div>
        );
      })}
    </>
  )
}

const Card = ( { item } ) => {

  const {createdAt, url, description, imageSource} = item;
  const uploadDate = formatDate(createdAt)
  const dateDifference = formatDateDifference(createdAt);

  return (
    <a className="card" href={url}>
      <div className="img-area">
        {imageSource ? (
          <img className="card-img" src={imageSource} alt="이미지" />
        ) : ( 
          <img className="empty-img" src={EmptyCardImg} alt="이미지 없음" />
        )}
      </div>
      <div className="info-area">
        <div className="card-extra-info">
          <p className="upload-time">{dateDifference}</p>
          <img src={kebab} className="kebab" alt="더보기 아이콘"></img>
        </div>
        <p className='text'>{description}</p>
        <p className='date'>{uploadDate}</p>
      </div>
    </a>
  );
};

export default Cards;
