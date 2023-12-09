import styled from "styled-components";
import { FolderItem, UserLinksItem } from "@/types/api";

import CardList from "../../components/Card/CardList";
import FolderNavbar from "../../components/Folder/FolderNavbar";
import FolderMenubar from "../../components/Folder/FolderMenubar";
import Searchbar from "../../components/Searchbar/Searchbar";
import NoLink from "./NoLink";
import useFolder from "@/hooks/useFolder";

interface FolderContainerProps {
  initialUserLinks: UserLinksItem[];
  userFolders: FolderItem[];
}

const FolderContainer = ({
  userFolders,
  initialUserLinks,
}: FolderContainerProps) => {
  const {
    showCards: cards,
    searchText,
    currentFolderId,
    selectedFolderName,
    handleSearchbar,
  } = useFolder({ initialUserLinks, userFolders });

  return (
    <StyledCardContainerBox>
      <Searchbar handleSearch={handleSearchbar} />

      {cards && cards.length === 0 ? (
        <NoLink />
      ) : (
        cards && (
          <>
            {searchText.length > 0 && (
              <StyledFolderSearchTextBox>
                <span>{searchText}</span>
                으로 검색한 결과입니다.
              </StyledFolderSearchTextBox>
            )}

            <StyledFolderContainerBox>
              <FolderNavbar
                folderData={userFolders}
                currentFolderId={currentFolderId}
              />
            </StyledFolderContainerBox>

            <StyledFolderNameBox>
              <FolderMenubar selectedFolderName={selectedFolderName} />
            </StyledFolderNameBox>

            <CardList cards={cards} folderData={userFolders} />
          </>
        )
      )}
    </StyledCardContainerBox>
  );
};

export default FolderContainer;

const StyledCardContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
  margin: 4rem auto;
  padding: 0 clamp(3.2rem, 5%, 19rem);
`;

const StyledFolderSearchTextBox = styled.div`
  display: flex;
  color: var(--linkbrary-gray-60, #9fa6b2);
  span {
    color: var(--linkbrary-gray-100, #373740);
  }

  /* Linkbrary/h2-semibold */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const StyledFolderContainerBox = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
  }
`;

const StyledFolderNameBox = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1124px) {
    width: 70.4rem;
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;
