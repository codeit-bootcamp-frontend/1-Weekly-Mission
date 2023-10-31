import * as S from './CardsContainer.style';
import Card from 'components/Card';

function CardsContainer({ cards = [] }) {
  return (
    <S.Container>
      {cards.map((card) => (
        <li key={card.id}>
          <Card data={card} />
        </li>
      ))}
    </S.Container>
  );
}

export default CardsContainer;
