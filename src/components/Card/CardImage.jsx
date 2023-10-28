import styled from 'styled-components';
import default_card_image from '../../assets/image/default_card.png';

function CardImage({ item }) {
  const { imageSource } = item;
  const cardImage = imageSource ? imageSource : default_card_image;

  return (
    <CardImageBox $cardImage={cardImage}></CardImageBox>
  );
}

export default CardImage;

const CardImageBox = styled.div`
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
