import * as S from './CardsContainer.style';
import { DEFAULT_USER_ID } from '@/services/config/default';
import Card from '@/components/Card';
import { Link } from '@/containers/Folder/Folder.types';

interface Props {
  cards?: Link[];
  userId?: number;
}

function CardsContainer({ cards = [], userId = DEFAULT_USER_ID }: Props) {
  return (
    <>
      {cards.length !== 0 ? (
        <S.Container>
          {cards?.map((card: Link) => (
            <li key={card.id}>
              <Card data={card} userId={userId} />
            </li>
          ))}
        </S.Container>
      ) : (
        <S.NoLink>저장된 링크가 없습니다.</S.NoLink>
      )}
    </>
  );
}

export default CardsContainer;
