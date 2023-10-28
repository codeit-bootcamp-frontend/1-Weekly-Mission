import Moment from 'react-moment';
import CardImage from './CardImage';
import { CardInfoBox, CardInfoDescription, CardInfoTop, CardPassedTime, CardWrapper } from './Card.style';
import card_config_icon from '../../assets/svg/kebab.svg';
import star_mark from '../../assets/image/star.png';
import styled from 'styled-components';

function Card({ item }) {
  return (
    <CardWrapper>
      <CardImage item={item} />
      <StarMarkButton>
        <StarMark src={star_mark} alt='카드 즐겨찾기 버튼' />
      </StarMarkButton>
      <CardInfoBox>
        <CardInfoTop>
          <CardPassedTime>
            <Moment fromNow>{item.createdAt}</Moment>
          </CardPassedTime>
          <button>
            <img src={card_config_icon} alt='카드 설정 버튼' />
          </button>
        </CardInfoTop>
        <CardInfoDescription>{item.description}</CardInfoDescription>
        <Moment format='YYYY.MM.DD'>{item.createdAt}</Moment>
      </CardInfoBox>
    </CardWrapper>
  );
}

export default Card;

const StarMarkButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const StarMark = styled.img`
  width: 3rem;
  height: 3rem;

  @media (min-width: 768px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
