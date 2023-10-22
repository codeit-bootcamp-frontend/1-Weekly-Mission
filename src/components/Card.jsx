import Moment from 'react-moment';
import '../css/card.css';

function Card({ item }) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-box">
          <img className="card-image" src={item.imageSource} alt={item.title} />
          <button className="star-mark-button">
            <img className="star-mark" src="/assets/image/star.png" alt="카드 즐겨찾기 버튼" />
          </button>
        </div>
        <div className="card-info-box">
          <div className="card-info-top">
            <Moment className="card-passed-time" fromNow>
              {item.createdAt}
            </Moment>
            <button>
              <img src="/assets/image/kebab.svg" alt="카드 설정 버튼" />
            </button>
          </div>
          <p className="card-description">{item.description}</p>
          <Moment format="YYYY.MM.DD">{item.createdAt}</Moment>
        </div>
      </div>
    </>
  );
}

export default Card;
