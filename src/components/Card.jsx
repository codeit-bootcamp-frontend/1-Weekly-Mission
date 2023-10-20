import Moment from 'react-moment';

function Card({ item }) {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card-image-box'>
          <img className='card-image' src={item.imageSource} alt={item.title} />
          <span className='star-mark'>star</span>
        </div>
        <div className='card-info-box'>
          <div className='card-info-top'>
            <Moment className='card-passed-time' fromNow>{item.createdAt}</Moment>
            <button>
              <img src='/assets/image/kebab.svg' alt='카드 설정 버튼' />
            </button>
          </div>
          <p>{item.description}</p>
          <Moment format='YYYY.MM.DD'>{item.createdAt}</Moment>
        </div>
      </div>
    </>
  );
}

export default Card;
