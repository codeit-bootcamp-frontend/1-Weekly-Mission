import { useEffect, useState } from "react";
import { getSampleFolder } from "api";
import * as S from "./SampleCardList.style";
import SampleCard from "./SampleCard";

function SampleCardList() {
  const [items, setItems] = useState();

  const handleLoad = async () => {
    const data = await getSampleFolder();
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
                <SampleCard item={item} />
              </S.CardContainer>
            );
          })}
        </S.CardListContainer>
      )}
    </>
  );
}

export default SampleCardList;
