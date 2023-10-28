import * as S from "./linkCardList.style.js";
import LinkCardComponent from "components/linkCard/LinkCard";

export default function LinkCardList({ linkList, page }) {
  return (
    <>
      <S.LinkCardListContainer>
        {linkList.map((linkCardData) => {
          return (
            <LinkCardComponent
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
