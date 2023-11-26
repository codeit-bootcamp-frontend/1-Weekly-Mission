import styled from 'styled-components';
import default_card_image from '../../assets/image/default_card.png';
import { CardProps } from './CardList';

interface Props {
  item: CardProps;
  path: string;
}

function CardImage({ item, path }: Props) {
  const imageSource = path === '/folder' ? item.image_source : item.imageSource;
  const cardImage = imageSource ? imageSource : default_card_image;

  return (
    <CardImageBox $cardImage={cardImage}></CardImageBox>
  );
}

export default CardImage;

const CardImageBox = styled.div<{$cardImage: string}>`
  width: 100%;
  height: 19rem;
  background: url(${({ $cardImage }) => $cardImage}) lightgray 50% / cover no-repeat;
  border-radius: 15px 15px 0 0;
  transition: 0.5s;

  &:hover {
    transform: scale(1.3);
  }

  @media (min-width: 768px) {
    height: 19.7rem;
  }
`;
