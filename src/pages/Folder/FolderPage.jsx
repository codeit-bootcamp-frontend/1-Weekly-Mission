import {
  useFetchUserFolders,
  useFetchUserLinks,
  useFetchUserProfile,
} from "../../apis/fetch"
import { DEFAULT_USER_ID } from "../../utils/utils"
import Addlink from "../../components/Addlink/Addlink"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import FolderContainer from "../../containers/Folder/FolderContainer"
import * as S from "../styles.js"

const FolderPage = () => {
  const [userProfile, profileLoading, profileError, profileRefetch] =
    useFetchUserProfile(DEFAULT_USER_ID)
  const [userFolders, folderLoading, folderError, folderRefetch] =
    useFetchUserFolders(DEFAULT_USER_ID)

  const [userLinks, userLinksLoading, error, refetch] = useFetchUserLinks(
    DEFAULT_USER_ID,
    undefined
  )

  return (
    <>
      <S.StyledHeader>
        {!profileLoading && <Navbar userData={userProfile?.data} />}
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
  )
}

export default FolderPage
