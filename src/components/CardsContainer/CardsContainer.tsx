import * as S from './CardsContainer.style';
import { DEFAULT_USER_ID } from '@apis/config/default';
import Card from '@components/Card';
import { Link } from '@pages/Folder/Folder.types';

interface Props {
  cards?: Link[];
  userId?: number;
}

function CardsContainer({ cards = [], userId = DEFAULT_USER_ID }: Props) {
  return (
    <S.Container>
      {cards?.map((card: Link) => (
        <li key={card.id}>
          <Card data={card} userId={userId} />
        </li>
      ))}
    </S.Container>
  );
}

export default CardsContainer;
