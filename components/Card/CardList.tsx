import Card from './Card';
import * as S from './CardList.style';

const CardList = data => {
  console.log(data.data);
  return (
    <>
      <S.Container>
        {data.data.map((data: { data: string }, i: { i: number }) => {
          return <Card key={i} data={data} />;
        })}
      </S.Container>
    </>
  );
};

export default CardList;
