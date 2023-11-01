import Footer from "../components/Footer/Footer"
import HeaderSearch from "../components/Header/HeaderSearch"
import Main from "../components/Main/Main"
import Navigation from "../components/Nav/Navigation"
import { useState } from "react";
import S from "../components/styled";
import LinkSection from "../components/Main/LinkSection";

function FolderPage() {
  const [isUser, setIsUser] = useState(null);

  return (
    <>
      <Navigation setIsUser={setIsUser} />
      <HeaderSearch />
      <Main>
        {isUser ?
          <LinkSection />
          : <S.DivEmpty>로그인 정보를 찾을 수 없습니다.</S.DivEmpty>}
      </Main>
      <Footer />
    </>
  )
}

export default FolderPage