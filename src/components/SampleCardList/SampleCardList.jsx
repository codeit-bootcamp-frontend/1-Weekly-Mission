import { useEffect, useState } from "react";
import { getAPI } from "api";
import * as S from "./SampleCardList.style";
import SampleCard from "./SampleCard";

function SampleCardList() {
  const [items, setItems] = useState();

  const handleLoad = async () => {
    const data = await getAPI("/sample/folder");
    setItems(data.folder?.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {items && (
        <S.CardListContainer>
          {items.map((item) => (
            <S.CardContainer key={item.id}>
              <SampleCard item={item} />
            </S.CardContainer>
          ))}
        </S.CardListContainer>
      )}
    </>
  );
}

export default SampleCardList;
