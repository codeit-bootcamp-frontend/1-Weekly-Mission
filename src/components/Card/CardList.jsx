import Card from './Card.jsx';
import * as S from './styles.js';

const CardList = ({ cards, handleModalCardDelete, handleModalCardAdd }) => {
  return (
    <S.CardListBox>
      {cards &&
        cards.map((card) => (
          <Card
            key={card.id}
            items={card}
            handleModalCardDelete={handleModalCardDelete}
            handleModalCardAdd={handleModalCardAdd}
          />
        ))}
    </S.CardListBox>
  );
};

export default CardList;
