
import CardTextContent from './CardTextContent';
import CardExtraInfo from './CardExtraInfo';
import '../../globalStyles.css'
import './Card.css';
import starIcon from './star.svg';
import EmptyCardImg from './Card_img.svg'

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

const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  return formattedDate;
};

const Card = ( { item } ) => {

  const {createdAt, url, description, imageSource} = item;
  const uploadDate = formatDate(createdAt)

  return (
    <a className="card" href={url}>
      <div className="img-area">
        <img className="star-icon" src={starIcon} alt="즐겨찾기 등록 버튼" />
        {imageSource ? (
          <img className="card-img" src={imageSource} alt="이미지" />
        ) : ( 
          <img className="empty-img" src={EmptyCardImg} alt="이미지 없음" />
        )}
      </div>
      <div className="info-area">
        <CardExtraInfo createdAt={createdAt} />
        <CardTextContent text={description} date={uploadDate}/>
      </div>
    </a>
  );
;}

export default Cards;
