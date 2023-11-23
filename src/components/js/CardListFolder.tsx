import styled from "styled-components";
import CardItem from "./CardItemFolder";
import { useState } from "react";

/* 카드리스트들 컴포넌트 */
function CardList({ folderLinks, modal, setLink }: any) {
  const [openedPopOver, setOpenedPopOver] = useState(null);

  const handleTogglePopOver = (idx: any) => {
    if (idx === openedPopOver) {
      setOpenedPopOver(null);
    } else {
      setOpenedPopOver(idx);
    }
  };

  const links = Array.isArray(folderLinks) ? folderLinks : [];
  return (
    <CardListWrapper>
      <CardListContainer>
        {links.map((item, idx) => {
          return (
            <CardItem
              key={item.id}
              idx={idx}
              item={item}
              modal={modal}
              setLink={setLink}
              isOpen={idx === openedPopOver}
              onClick={handleTogglePopOver}
            />
          );
        })}
      </CardListContainer>
    </CardListWrapper>
  );
}
export default CardList;

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
