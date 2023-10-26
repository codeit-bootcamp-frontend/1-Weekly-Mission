import * as S from './CardList.style';
import Card from 'pages/Shared/components/Card';

function CardList({ links = [] }) {
  return (
    <S.CardListContainer>
      {links.map((link) => (
        <li key={link.id}>
          <Card data={link} />
        </li>
      ))}
    </S.CardListContainer>
  );
}

export default CardList;
