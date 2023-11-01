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
import * as S from './styles.js';

const FolderPage = () => {
  const { data: userProfile, isLoading: profileLoading } =
    useFetchUserProfile(DEFAULT_USER_ID);

  const { data: userFolders, isLoading: folderLoading } =
    useFetchUserFolders(DEFAULT_USER_ID);

  const { data: userLinks, isLoading: userLinksLoading } = useFetchUserLinks(
    DEFAULT_USER_ID,
    undefined,
  );

  return (
    <>
      <S.StyledHeader>
        {!profileLoading && userProfile?.data && (
          <Navbar userData={userProfile.data[0]} />
        )}
        <Addlink />
      </S.StyledHeader>
      {!folderLoading && !userLinksLoading && (
        <FolderContainer
          folderData={userFolders?.data}
          userId={DEFAULT_USER_ID}
          userLinks={userLinks.data}
        />
      )}
      <Footer />
    </>
  );
};

export default FolderPage;
