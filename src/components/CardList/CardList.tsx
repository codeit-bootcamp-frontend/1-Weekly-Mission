import * as S from "./CardList.style";
import Card from "./Card";

function CardList({ items }) {
  return(
    <S.CardContainer>
      {items &&
        items.map((item) => 
          <Card item={item}></Card>
        )
      }
    </S.CardContainer>

  );
}

export default CardList;