import { useEffect, useState } from "react";
import Card from "components/Card";
import { getFolder } from "api";
import * as S from "./CardList.style";

function CardList() {
  const [items, setItems] = useState();

  const handleLoad = async () => {
    const data = await getFolder();
    setItems(data.folder?.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
