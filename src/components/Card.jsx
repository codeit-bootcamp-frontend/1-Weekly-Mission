import Moment from 'react-moment';
import '../css/card.css';

function Card({ item }) {
  return (
    <>
      <div className="card-wrapper" href={item.url} target="_blank" rel="noreferrer noopener">
        <div className="card-image-box">
          <img className="card-image" src={item.image_source} alt={item.title} />
          <button className="star-mark-button">
            <img className="star-mark" src="/assets/image/star.png" alt="카드 즐겨찾기 버튼" />
          </button>
        </div>
        <div className="card-info-box">
          <div className="card-info-top">
            {/* Moment에서 fromNow는 현재(날짜 및 시간)기준으로 상대적인 시간 구하기*/}
            <Moment className="card-passed-time" fromNow>
              {item.createdAt}
            </Moment>
            <button>
              <img src="/assets/image/kebab.svg" alt="카드 설정 버튼" />
            </button>
          </div>
          <p className="card-description">{item.description}</p>
          {/* Moment에서 format()을 하면 원하는 타입으로 string으로 반환 */}
          <Moment format="YYYY.MM.DD">{item.createdAt}</Moment>
        </div>
      </div>
    </>
  );
}

export default Card;
