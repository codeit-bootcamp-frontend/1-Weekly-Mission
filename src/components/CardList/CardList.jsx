import * as S from './CardList.style';
import Card from 'components/Card';

function CardList({ cards = [] }) {
  return (
    <S.CardListContainer>
      {cards.map((card) => (
        <li key={card.id}>
          <Card data={card} />
        </li>
      ))}
    </S.CardListContainer>
  );
}

export default CardList;
