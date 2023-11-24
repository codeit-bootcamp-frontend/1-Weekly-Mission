import Footer from "src/components/Footer/Footer";
import HeaderSearch from "src/components/Header/HeaderSearch";
import Main from "src/components/Main/Main";
import Navigation from "src/components/Nav/Navigation";
import { useState } from "react";
import { S } from "src/components/styled";
import LinkSection from "src/components/Main/LinkSection";

function FolderPage() {
  const [isUser, setIsUser] = useState<boolean>(false);

  return (
    <>
      <Navigation setIsUser={setIsUser} page="folder" />
      <HeaderSearch isUser={isUser} />
      <Main>{isUser ? <LinkSection /> : <S.DivEmpty>로그인 정보를 찾을 수 없습니다.</S.DivEmpty>}</Main>
      <Footer />
    </>
  );
}

export default FolderPage;
