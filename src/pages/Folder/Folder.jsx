import {
  useFetchUserFolders,
  useFetchUserLinks,
  useFetchUserProfile,
} from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import FolderContainer from "../../containers/Folder/FolderContainer"

const Folder = () => {
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
  console.log("프로필", userProfile)
  console.log("폴더들", userFolders)
  console.log("링크", userLinks)
  if (profileData && folderData && linkData) {
    return (
      <>
        <header className="shared-header">
          <Navbar userData={userProfile} />
          <Navbar />
          <FolderContainer />
        </header>
        <Footer />
      </>
    )
  }
}

export default Folder
