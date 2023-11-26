import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../common/SearchBar";
import FolderList from "./FolderList";
import CardList from "../card/CardList";

const FolderContainer = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onFolderSelect = (folderId: number | null, isAll?: boolean) => {
    if (isAll) {
      setSelectedFolderId(null);
    } else {
      setSelectedFolderId(folderId);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Main>
      <Container>
        <SearchBar onSearch={handleSearch} />
        <FolderList onFolderSelect={onFolderSelect} />
        <CardList folderId={selectedFolderId} searchTerm={searchTerm} />
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
