import Moment from 'react-moment';
import CardImage from './CardImage';
import { CardInfoBox, CardInfoDescription, CardInfoTop, CardPassedTime, CardWrapper } from './Card.style';

function Card({ item }) {
  return (
    <CardWrapper>
      <CardImage item={item} />
      <CardInfoBox>
        <CardInfoTop>
          <CardPassedTime>
            <Moment className='card-passed-time' fromNow>{item.createdAt}</Moment>
          </CardPassedTime>
          <button>
            <img src='/assets/images/kebab.svg' alt='카드 설정 버튼' />
          </button>
        </CardInfoTop>
        <CardInfoDescription>{item.description}</CardInfoDescription>
        <Moment format='YYYY.MM.DD'>{item.createdAt}</Moment>
      </CardInfoBox>
    </CardWrapper>
  );
}

export default Card;
