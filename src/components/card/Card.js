import cardImg from './card_img.svg';
import ImgArea from './ImgArea';
import CardTextContent from './CardTextContent';
import CardExtraInfo from './CardExtraInfo';
import '../../globalStyles.css'
import './Card.css';

const Card = () => {
  const text = "Lorem ipsum dolor sit met consectetur. Me too met habitant nun cons.";
  const date = "2023. 3. 15";
  const uploadTime = "10 minutes ago";

  return (
    <div className="card">
      <div className="img-area">
        <ImgArea src={cardImg} />
      </div>
      <div className="info-area">
        <CardExtraInfo>{uploadTime}</CardExtraInfo>
        <CardTextContent text={text} date={date}/>
      </div>
    </div>
  );
;}

export default Card;
