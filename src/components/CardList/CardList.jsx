import { useEffect, useState } from "react";
import Card from "components/CardList/Card";
import * as S from "./CardList.style";

function CardList({ data }) {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <>
      {!data.length ? (
        <S.NoLink>저장된 링크가 없습니다</S.NoLink>
      ) : (
        items && (
          <S.CardListContainer>
            {items.map((item) => {
              return (
                <S.CardContainer key={item.id}>
                  <Card item={item} />
                </S.CardContainer>
              );
            })}
          </S.CardListContainer>
        )
      )}
    </>
  );
}

export default CardList;
