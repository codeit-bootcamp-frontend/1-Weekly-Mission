import * as S from "./SampleCardList.style";
import SampleCard from "./SampleCard";
import useRequest from "hooks/useRequest";

function SampleCardList() {
  const { data } = useRequest({ url: "/sample/folder" });
  const items = data?.folder?.links;

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
