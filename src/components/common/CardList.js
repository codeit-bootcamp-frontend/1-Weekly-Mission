import Card from './Card';
import styled from 'styled-components';

export default function CardList({ cards }) {
  if (cards.length === 0) {
    return <Div>저장된 링크가 없습니다</Div>;
  }
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

const Div = styled.div`
  max-width: 1060px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 0 auto 100px;
`;
