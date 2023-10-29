import { useFetchUserProfileSample } from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Home from "../../containers/Home/Home"
import * as S from "../styles"

const HomePage = () => {
  const [userProfile, loading, error, refetch] = useFetchUserProfileSample()

  if (!loading) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={userProfile} />
        </S.StyledHeader>
        <Home />
        <Footer />
      </>
    )
  }
}

export default HomePage
