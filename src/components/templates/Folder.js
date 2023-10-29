import React from "react";
import FolderToolbar from "../modules/FolderToolbar";
import styled from "styled-components";
import SearchBar from "../modules/SearchBar";

import Card from "../modules/Card";
import DeviceSizes from "../../utils/DeviceSizes";

const Container = styled.section`
  background-color: var(--linkbrary-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 3.2rem 10rem 3.2rem;
  gap: 4rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 106rem;

  ${DeviceSizes.tablet} {
    max-width: 70rem;
  }

  ${DeviceSizes.mobile} {
    display: grid;
    gap: 2rem;
    max-width: 32.5rem;
    width: 100%;
    grid-template-areas:
      "searchBar"
      "folderButtonWrap"
      "folderManageButtons"
      "cardList"
      "addFolderButton";
  }
`;

const EmptyListMessage = styled.div`
  display: grid;
  justify-content: center;
  font-size: 1.6rem;
  ${DeviceSizes.mobile} {
    font-size: 1.4rem;
    grid-area: cardList;
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 34rem);
  justify-content: center;
  gap: 2rem;

  ${DeviceSizes.tablet} {
    grid-template-columns: repeat(2, 34rem);
    gap: 2.4rem;
  }
  ${DeviceSizes.mobile} {
    grid-template-columns: minmax(auto, 32.5rem);
    gap: 2rem;
    position: relative;
    grid-area: cardList;
  }
`;

const Folder = ({ headerContent, links, folders }) => {
  return (
    <>
      {headerContent}
      <Container>
        <InnerContainer>
          <SearchBar />
          {folders && <FolderToolbar folders={folders} />}

          {links?.length ? (
            <CardList>
              {links.map((link) => (
                <Card link={link} key={link.id} />
              ))}
            </CardList>
          ) : (
            <EmptyListMessage>저장된 링크가 없습니다.</EmptyListMessage>
          )}
        </InnerContainer>
      </Container>
    </>
  );
};

export default Folder;
