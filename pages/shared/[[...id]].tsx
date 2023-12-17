import { GetServerSideProps } from "next";
import styled from "styled-components";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ShareContainer from "@/containers/Share/ShareContainer";
import { fetchUserProfile } from "@/apis/userProfile.api";
import { DEFAULT_USER_ID } from "@/constants/constant";
import { fetchUserLinks } from "@/apis/userLinks.api";
import { UserLinksItem, UserProfileItem } from "@/types/api";
import { fetchUserFolders } from "@/apis/userFolders.api";
import { getFolderInfo } from "@/apis/folder.api";

interface SharePageProps {
  userProfile: UserProfileItem;
  folderData: UserLinksItem[];
  cardData: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  // 잘못된 query
  if (id !== undefined && id.length > 1) {
    return {
      notFound: true,
    };
  }
  const { data } = await fetchUserProfile(DEFAULT_USER_ID);
  const userProfile = data[0];
  const { data: cardData } = await fetchUserLinks({
    userId: DEFAULT_USER_ID,
    folderId: id,
  });

  const { data: folderData } = await getFolderInfo(id);
  if (!userProfile || cardData?.length === 0 || folderData?.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { cardData, folderData, userProfile } };
};

const SharePage = ({ userProfile, folderData, cardData }: SharePageProps) => {
  const fixedBool = true;
  const handleSearchbar = (searchedText: string) => {};

  console.log(folderData);
  return (
    <>
      <StyledHeader>
        <Navbar userData={userProfile} fixed={fixedBool} />
      </StyledHeader>
      <ShareContainer
        shareData={cardData}
        handleSearchbar={handleSearchbar}
        folderData={folderData}
      />
      <Footer />
    </>
  );
};

export default SharePage;

const StyledHeader = styled.header`
  margin-top: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--linkbrary-bg);
`;
