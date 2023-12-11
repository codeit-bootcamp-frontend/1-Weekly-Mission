import { DEFAULT_USER_ID } from '@/services/config/default';
import Card from './Card';
import { Link } from '@/types/Folder.types';

interface Props {
  cards?: Link[];
  userId?: number;
}

function CardsContainer({ cards = [], userId = DEFAULT_USER_ID }: Props) {
  return (
    <>
      {cards.length !== 0 ? (
        <ul className='mx-auto grid gap-20pxr pt-32pxr tablet:auto-rows-fr tablet:grid-cols-2 tablet:gap-25pxr tablet:pt-40pxr pc:grid-cols-3 pc:gap-x-20pxr pc:pt-40pxr'>
          {cards?.map((card: Link) => (
            <li key={card.id}>
              <Card data={card} userId={userId} />
            </li>
          ))}
        </ul>
      ) : (
        <section className='mt-[13rem] h-[50vh] text-center text-14pxr font-normal'>
          저장된 링크가 없습니다.
        </section>
      )}
    </>
  );
}

export default CardsContainer;
