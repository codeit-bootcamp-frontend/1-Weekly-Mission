import { useState } from "react";
import Footer from "src/components/Footer/Footer";
import HeaderSearch from "src/components/Header/HeaderInput";
import LinkSection from "src/components/Main/LinkSection";
import Main from "src/components/Main/Main";
import Navigation from "src/components/Nav/Navigation";
import { Empty } from "src/pages/Folder/FolderPage.styled";

function FolderPage() {
  const [isUser, setIsUser] = useState<boolean>(false);

  return (
    <>
      <Navigation setIsUser={setIsUser} page="folder" />
      <HeaderSearch isUser={isUser} />
      <Main>{isUser ? <LinkSection /> : <Empty>로그인 정보를 찾을 수 없습니다.</Empty>}</Main>
      <Footer />
    </>
  );
}

export default FolderPage;
