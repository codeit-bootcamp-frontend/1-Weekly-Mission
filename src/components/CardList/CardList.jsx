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
      {items && (
        <S.CardListContainer>
          {items.map((item) => {
            return (
              <S.CardContainer key={item.id}>
                <Card item={item} />
              </S.CardContainer>
            );
          })}
        </S.CardListContainer>
      )}
    </>
  );
}

export default CardList;
