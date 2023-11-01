import styled from "styled-components";
import LinkSearchInput from "./LinkSearchInput";
import CardList from "./CardList";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 779px) {
    padding: 0 3.2rem;
    gap: 3.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const SharedMain = ({ folderInfo }) => {
  return (
    <MainContainer>
      <LinkSearchInput />
      <CardList folderCards={folderInfo} />
    </MainContainer>
  );
};

export default SharedMain;
