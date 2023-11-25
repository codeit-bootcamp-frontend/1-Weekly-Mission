import Moment from 'react-moment';
import CardImage from './CardImage';
import { CardInfoBox, CardInfoDescription, CardInfoTop, CardPassedTime, CardWrapper } from './Card.style';
import card_config_icon from '../../assets/svg/kebab.svg';
import star_mark from '../../assets/image/star.png';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import SelectMenu from '../Popover/SelectMenu';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface Props {
  item: {
    created_at?: Date,
    createdAt?: Date,
    description: string
  };
  path: string
}

function Card({ item, path }: Props) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const createdAt = path === '/folder' ? item.created_at : item.createdAt;

  useOnClickOutside(popoverRef, () => setIsOpen(false));

  const openSelectMenu = ({ isOpen }: {isOpen: boolean}) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <CardWrapper>
        <CardImageContainer>
          <CardImage item={item} path={path} />
        </CardImageContainer>
        <StarMarkButton>
          <StarMark src={star_mark} alt='카드 즐겨찾기 버튼' />
        </StarMarkButton>
        <CardInfoBox>
          <CardInfoTop>
            <CardPassedTime>
              <Moment fromNow>{createdAt}</Moment>
            </CardPassedTime>
            <CardConfigButton onClick={() => {
              openSelectMenu({
                isOpen: true,
              });
            }}>
              <img src={card_config_icon} alt='카드 설정 버튼' />
            </CardConfigButton>
          </CardInfoTop>
          <CardInfoDescription>{item.description}</CardInfoDescription>
          <Moment format='YYYY.MM.DD'>{item.createdAt}</Moment>
        </CardInfoBox>
      </CardWrapper>
      {isOpen && <SelectMenu ref={popoverRef} />}
    </>
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

const CardImageContainer = styled.div`
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`;

const CardConfigButton = styled.button`
  width: 2.1rem;
  height: 1.7rem;
`;
