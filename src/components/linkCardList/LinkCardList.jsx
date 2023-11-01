import * as S from "./linkCardList.style.js";
import LinkCard from "components/linkCard/LinkCard";

export default function LinkCardList({ linkList, page }) {
  return (
    <>
      <S.LinkCardListContainer>
        {linkList.map((linkCardData) => {
          return (
            <LinkCard
              key={linkCardData.id}
              cardData={linkCardData}
              page={page}
            />
          );
        })}
      </S.LinkCardListContainer>
    </>
  );
}
