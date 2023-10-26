import styled from 'styled-components';

function CardImage({ item }) {
  return (
    <CardImageBox>
      <CardImageStyle src={item.imageSource} alt={item.title} />
      <StarMarkButton>
        <StarMark src='/assets/images/star.png' alt='카드 즐겨찾기 버튼' />
      </StarMarkButton>
    </CardImageBox>
  );
}

export default CardImage;

const CardImageBox = styled.div`
  width: 100%;
  height: 19rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 19.7rem;
  }
`;

const CardImageStyle = styled.img`
  width: 100%;
  height: 100%;
  background: lightgray 50% / cover no-repeat;
  border-radius: 15px 15px 0 0;
  transition: 0.5s;
  object-fit: contain;
  
  &:hover {
    transform: scale(1.3);
  }
`;

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
