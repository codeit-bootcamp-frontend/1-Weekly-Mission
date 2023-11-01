import Card from './Card';
import styled from 'styled-components';

export default function CardList({ cards }) {
  return (
    <Container>
      {cards.map((card) => (
        <Card value={card} key={card.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  justify-content: center;
  gap: 25px 20px;
  padding-bottom: 100px;
  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 340px);
  }
  @media (max-width: 767px) {
    grid-template-columns: 340px;
  }
`;
