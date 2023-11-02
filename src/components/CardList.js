import "../components/CardList.css";
import noImg from "../assets/noImg.svg";
import { formatDate } from "../utils/formatDate";
import { getTimeDifference } from "../utils/getTimeDifference";


function Card({ item }) {
  const image = item?.image_source;
  const desc = item?.description;
  const date = item?.created_at;

  return (
    <>
      <div className="card-img-container">
        {(image) ? <img className="card-img" src={image} alt="카드 이미지" /> 
        : <img className="card-img" src={noImg} alt="이미지 없음 "/>}
      </div>
      <div className="card-text-container">
        <p className="card-createdAt">{getTimeDifference(date)}</p>
        <p className="card-description">{desc}</p>
        <p className="card-date">{formatDate(date)}</p>
      </div>
    </>
  );
}

function CardList({ link }) {
  return (
    <ul className="cardList-container">
      {link.map((item) => 
        <li key={item.id} className="card-style">
          <Card item={item} />
        </li>
      )}
    </ul>
  );
}

export default CardList;