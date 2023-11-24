import * as S from './CardsContainer.style';
import Card from 'components/Card';

function CardsContainer({ cards = [], userId }) {
  return (
    <S.Container>
      {cards.map((card) => (
        <li key={card.id}>
          <Card data={card} userId={userId} />
        </li>
      ))}
    </S.Container>
  );
}

export default CardsContainer;
