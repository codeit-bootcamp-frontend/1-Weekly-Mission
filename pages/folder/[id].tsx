import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { fetchUserProfile } from "@/api/userProfile.api";
import { fetchUserFolders } from "@/api/userFolders.api";
import { fetchUserLinks } from "@/api/userLinks.api";
import { fetchGet } from "@/api/api";
import { UserProfileItem, UserLinksItem, FolderItem } from "@/types/api";

import { DEFAULT_USER_ID, DEFAULT_FOLDER } from "@/constants/constant";
import Addlink from "@/components/Addlink/Addlink";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import FolderContainer from "@/containers/Folder/FolderContainer";
import ModalDelete from "@/components/Modal/ModalDelete";

export const getServerSideProps = async () => {
  const { data: userProfile } = await fetchUserProfile(DEFAULT_USER_ID);
  const { data: userFolders } = await fetchUserFolders(DEFAULT_USER_ID);
  const { data: userLinks } = await fetchUserLinks({
    userId: DEFAULT_USER_ID,
    folderId: undefined,
  });

  if (!userProfile && !userFolders && !userLinks) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      userProfile,
      userFolders,
      userLinks,
    },
  };
};

interface FolderPageProps {
  userFolders: FolderItem[];
  userProfile: UserProfileItem[];
  userLinks: UserLinksItem[];
}

const FolderPage = ({
  userFolders,
  userProfile,
  userLinks: initialUserLinks,
}: FolderPageProps) => {
  const [selectedFolderName, setSelectedFolderName] = useState<string>(
    DEFAULT_FOLDER.name
  );
  const router = useRouter();
  const { id: currentFolderId } = router.query;
  const [cards, setCards] = useState<UserLinksItem[]>(initialUserLinks);
  const [showCards, setShowCards] = useState<UserLinksItem[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchParam = async () => {
    if (currentFolderId === null || currentFolderId === "all") {
      setSelectedFolderName(DEFAULT_FOLDER.name);
      const fetchedData = await fetchUserLinks({
        userId: DEFAULT_USER_ID,
        folderId: "all",
      });
      setShowCards(fetchedData.data);
    } else {
      const fetchedData = await fetchUserLinks({
        userId: DEFAULT_USER_ID,
        folderId: currentFolderId,
      });
      setShowCards(fetchedData.data);
      const selectedFolder: FolderItem | undefined = userFolders.find(
        (folder: { id: number }) => String(folder.id) === currentFolderId
      );
      if (selectedFolder === undefined) throw new Error();
      setSelectedFolderName(selectedFolder.name);
    }
  };

  const handleSearchbar = async (searchedText: string) => {
    setSearchText(searchedText);
    if (searchedText.length > 0) {
      setShowCards(
        cards.filter(
          (link: { description: string; url: string; title: string }) => {
            return (
              link["description"]?.includes(searchedText) ||
              link["url"]?.includes(searchedText) ||
              link["title"]?.includes(searchedText)
            );
          }
        )
      );
    } else {
      const query = `/api/users/${DEFAULT_USER_ID}/links`;
      const fetchedData = await fetchGet(query);
      setShowCards(fetchedData.data);
    }
  };

  useEffect(() => {
    handleSearchParam();
  }, [currentFolderId]);

  console.log(selectedFolderName);
  return (
    <StyledMainBox>
      <StyledHeader>
        <Navbar userData={userProfile[0]} fixed={true} />
        <Addlink />
      </StyledHeader>
      <FolderContainer
        folderData={userFolders}
        userId={DEFAULT_USER_ID}
        handleSearchbar={handleSearchbar}
        cards={showCards}
        searchText={searchText}
        currentFolderId={currentFolderId}
        selectedFolderName={selectedFolderName}
      />
      <Footer />
    </StyledMainBox>
  );
};

export default FolderPage;

const StyledHeader = styled.header`
  margin-top: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--linkbrary-bg);
`;

const StyledMainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
