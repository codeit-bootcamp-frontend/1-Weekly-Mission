import styled from "styled-components";
import EmptyLinkScreen from "./EmptyLinkScreen";
import CardDivide from "./CardDivide";
import { SelectedFolderContentsInfo, SharedLinkInfo } from "../../../types";
import useFilteredCards from "@/src/hooks/useFilteredCards";

interface Props {
  folderCards: SharedLinkInfo[] | SelectedFolderContentsInfo[];
  searchKeyword: string;
}

const CardList = ({ folderCards, searchKeyword }: Props) => {
  const filteredCards = useFilteredCards(folderCards, searchKeyword);

  return (
    <>
      {filteredCards && filteredCards.length > 0 ? (
        <Container>
          <CardDivide folderCards={filteredCards} />
        </Container>
      ) : (
        <EmptyLinkScreen>저장된 링크가 없습니다🥲</EmptyLinkScreen>
      )}
    </>
  );
};

export const Container = styled.section`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(3, 34rem);
  grid-template-rows: repeat(auto, 33.4rem);

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }

  @media (max-width: 779px) {
    grid-template-columns: repeat(1, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }
`;

export default CardList;
