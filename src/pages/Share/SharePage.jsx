import {
  useFetchSampleFolder,
  useFetchUserProfileSample,
} from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ShareContainer from "../../containers/Share/ShareContainer"
import * as S from "../styles.js"

const SharePage = () => {
  let [userProfile, profileLoading, profileError, profileRefetch] =
    useFetchUserProfileSample()
  const [sampleFolder, folderLoading, folderError, folderRefetch] =
    useFetchSampleFolder()

  userProfile = [userProfile]

  const fixedBool = true
  if (!profileLoading && !folderLoading) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={userProfile} fixed={fixedBool} />
        </S.StyledHeader>
        <ShareContainer shareData={sampleFolder} />
        <Footer />
      </>
    )
  }
}

export default SharePage
