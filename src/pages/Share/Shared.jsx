import {
  useFetchSampleFolder,
  useFetchUserProfileSample,
} from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Share from "../../containers/Share/Share"
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
        <Share shareData={folderData} />
        <Footer />
      </>
    )
  }
}

export default Shared
