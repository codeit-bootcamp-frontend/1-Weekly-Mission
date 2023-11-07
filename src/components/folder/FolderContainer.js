import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../common/SearchBar";
import FolderList from "./FolderList";
import CardList from "../card/CardList";

const FolderContainer = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const onFolderSelect = (folderId, isAll) => {
    if (isAll) {
      setSelectedFolderId(null);
    } else {
      setSelectedFolderId(folderId);
    }
  };

  return (
    <Main>
      <Container>
        <SearchBar />
        <FolderList onFolderSelect={onFolderSelect} />
        <CardList folderId={selectedFolderId} />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
    margin-right: 3.2rem;
    margin-left: 3.2rem;
  }
`;

export default FolderContainer;
