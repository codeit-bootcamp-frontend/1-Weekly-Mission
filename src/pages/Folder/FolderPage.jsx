import {
  useFetchUserFolders,
  useFetchUserLinks,
  useFetchUserProfile,
} from "../../apis/fetch"
import Addlink from "../../components/Addlink/Addlink"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import FolderContainer from "../../containers/Folder/FolderContainer"
import * as S from "../styles.js"

const FolderPage = () => {
  const userProfile = useFetchUserProfile(1)
  const userFolders = useFetchUserFolders(1)
  const userLinks = useFetchUserLinks(1)

  const profileLoading = userProfile?.loading
  const foldersLoading = userFolders?.loading
  const linksLoading = userLinks?.loading

  let profileData, folderData, linkData
  if (!profileLoading && !foldersLoading && !linksLoading) {
    profileData = userProfile?.data?.data
    folderData = userFolders?.data?.data
    linkData = userLinks?.data?.data
  }

  if (profileData && folderData && linkData) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={profileData} />
          <Addlink />
        </S.StyledHeader>
        <FolderContainer folderData={folderData} linkData={linkData} />
        <Footer />
      </>
    )
  }
}

export default FolderPage
