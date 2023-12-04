import Card from "src/components/Card/Card";
import styled from "styled-components";

function CardList({ card, isCardEditable, onClick }: CardListProps) {
  return (
    <StyledWrapper>
      {card.map((val) => (
        <Card
          key={val.id}
          card={val}
          isCardEditable={isCardEditable}
          onClick={onClick}
        />
      ))}
    </StyledWrapper>
  );
}

export default CardList;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(34rem, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
