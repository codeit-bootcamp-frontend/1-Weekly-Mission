import styled from "styled-components";
import CardList from "./CardList";
import LinkSearchInput from "../../UI/LinkSearchInput";
import * as React from "react";
import { SharedLinkInfo } from "../../../types";

const SharedMain = ({ folderInfo }: { folderInfo: SharedLinkInfo[] }) => {
  const [searchKeyword, setSearchKeyword] = React.useState<string>("");

  return (
    <MainContainer>
      <LinkSearchInput searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <CardList folderCards={folderInfo} searchKeyword={searchKeyword} />
    </MainContainer>
  );
};

export default SharedMain;

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
