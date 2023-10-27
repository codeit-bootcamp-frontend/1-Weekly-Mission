import { useFetchUserProfileSample } from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Home from "../../containers/Home/Home"
import * as S from "../styles"

const HomePage = () => {
  const userProfile = useFetchUserProfileSample()
  const userLoading = userProfile?.loading
  let userData
  if (!userLoading) {
    userData = userProfile?.data
  }

  if (userData) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={userData} />
        </S.StyledHeader>
        <Home />
        <Footer />
      </>
    )
  }
}

export default HomePage
