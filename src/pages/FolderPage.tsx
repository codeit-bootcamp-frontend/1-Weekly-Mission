import React from 'react';

import {
  useFetchUserFolders,
  useFetchUserLinks,
  useFetchUserProfile,
} from '../apis/fetch';

import { DEFAULT_USER_ID } from '../constants/constant';
import Addlink from '../components/Addlink/Addlink';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import FolderContainer from '../containers/Folder/FolderContainer';
import * as S from './styles';

const FolderPage = () => {
  const { data: userProfile, isLoading: profileLoading } =
    useFetchUserProfile(DEFAULT_USER_ID);

  const { data: userFolders, isLoading: folderLoading } =
    useFetchUserFolders(DEFAULT_USER_ID);

  const { data: userLinks, isLoading: userLinksLoading } = useFetchUserLinks(
    DEFAULT_USER_ID,
    undefined,
  );

  if (profileLoading || folderLoading || userLinksLoading) return null;
  const folderData = userFolders.data;
  const userData = userProfile.data[0];
  const userLinkData = userLinks.data;

  return (
    <S.FolderMainBox>
      <S.StyledHeader>
        <Navbar userData={userData} fixed={true} />
        <Addlink />
      </S.StyledHeader>
      <FolderContainer
        folderData={folderData}
        userId={DEFAULT_USER_ID}
        userLinks={userLinkData}
      />
      <Footer />
    </S.FolderMainBox>
  );
};

export default FolderPage;
