import styled from "styled-components";

import { fetchUserProfile } from "@/apis/userProfile.api";
import { fetchUserFolders } from "@/apis/userFolders.api";
import { fetchUserLinks } from "@/apis/userLinks.api";
import { UserProfileItem, UserLinksItem, FolderItem } from "@/types/api";

import { DEFAULT_USER_ID } from "@/constants/constant";
import Addlink from "@/components/Addlink/Addlink";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import FolderContainer from "@/containers/Folder/FolderContainer";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getUser } from "@/apis/getUser.api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  // 잘못된 Query
  if (id !== undefined && id.length > 1) {
    return {
      notFound: true,
    };
  }
  // const { data: userProfile } = await getUser();
  const { data: userProfile } = await fetchUserProfile(DEFAULT_USER_ID);
  const { data: userFolders } = await fetchUserFolders(DEFAULT_USER_ID);
  const { data: userLinks } = await fetchUserLinks({
    userId: DEFAULT_USER_ID,
    folderId: id,
  });

  console.log(userProfile);
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
  userFolders: initialUserFolders,
  userProfile: initialUserProfile,
  userLinks: initialUserLinks,
}: FolderPageProps) => {
  const [userProfile] = useState(initialUserProfile);
  const [userLinks] = useState(initialUserLinks);
  const [userFolders] = useState(initialUserFolders);

  return (
    <StyledMainBox>
      <StyledHeader>
        <Navbar userData={userProfile[0]} fixed={true} />
        <Addlink />
      </StyledHeader>
      <FolderContainer userFolders={userFolders} initialUserLinks={userLinks} />
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
