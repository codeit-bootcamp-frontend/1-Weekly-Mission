import {
  useFetchSampleFolder,
  useFetchUserProfileSample,
} from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ShareContainer from "../../containers/Share/ShareContainer"
import * as S from "../styles"

const Shared = () => {
  const userProfile = useFetchUserProfileSample()
  const sampleFolder = useFetchSampleFolder()
  const userLoading = userProfile?.loading
  const folderLoading = sampleFolder?.loading

  let userData, folderData
  if (!userLoading && !folderLoading) {
    userData = userProfile?.data
    folderData = sampleFolder?.data
  }

  if (userData && folderData) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={userData} />
        </S.StyledHeader>
        <ShareContainer shareData={folderData} />
        <Footer />
      </>
    )
  }
}

export default Shared
