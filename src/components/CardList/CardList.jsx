import * as S from "./CardList.style";
import Card from "./Card";

function CardList({ cards }) {
  return(
    <>
      {cards &&
        cards.map((card) => {
          return (
            <S.CardContainer>
              <Card></Card>
            </S.CardContainer>
          );
        })
      }
    </>

  );
}

export default CardList;