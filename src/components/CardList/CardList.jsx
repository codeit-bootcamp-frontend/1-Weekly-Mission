import Card from "components/CardList/Card";
import * as S from "./CardList.style";

function CardList({ items }) {
  return (
    <>
      {!items.length ? (
        <S.NoLink>저장된 링크가 없습니다</S.NoLink>
      ) : (
        items && (
          <S.CardListContainer>
            {items.map((item) => (
              <S.CardContainer key={item.id}>
                <Card item={item} />
              </S.CardContainer>
            ))}
          </S.CardListContainer>
        )
      )}
    </>
  );
}

export default CardList;
