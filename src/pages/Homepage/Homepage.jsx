import { useFetchUserProfileSample } from "../../apis/fetch"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import HeroHeader from "../../containers/Home/HeroHeader"
import Home from "../../containers/Home/Home"
import * as S from "../styles"

const HomePage = () => {
  const [userProfile, loading, error, refetch] = useFetchUserProfileSample()

  const fixedBool = true
  if (!loading) {
    return (
      <>
        <S.StyledHeader>
          <Navbar userData={userProfile} fixed={fixedBool} />
          <HeroHeader />
        </S.StyledHeader>
        <Home />
        <Footer />
      </>
    )
  }
}

export default HomePage
