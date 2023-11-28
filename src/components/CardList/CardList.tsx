import * as S from "./CardList.style";
import Card from "./Card";
import { Data } from './types';

interface CardListProps {
  items: Data[];
}

function CardList({ items }: CardListProps) {
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