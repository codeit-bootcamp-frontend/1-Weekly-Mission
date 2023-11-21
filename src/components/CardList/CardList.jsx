import * as S from "./CardList.style";
import Card from "./Card";
import FolderMenu from 'components/FolderMenu';

function CardList({ cards }) {
  return(
    <>
      <FolderMenu />
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