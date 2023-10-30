import styled from "styled-components";
import CardItem from "./CardItemFolder";

const CardListWrapper = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    max-width: 700px;
  }

  @media screen and (max-width: 770px) {
    max-width: 325px;
  }
`;

const CardListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 25px 20px;
`;

/* 카드리스트들 컴포넌트 */
function CardList({ folderLinks }) {
  const links = Array.isArray(folderLinks) ? folderLinks : [];
  return (
    <CardListWrapper>
      <CardListContainer>
        {links.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </CardListContainer>
    </CardListWrapper>
  );
}
export default CardList;
