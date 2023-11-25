import { useState } from "react";
import Footer from "src/components/Footer/Footer";
import HeaderSearch from "src/components/Header/HeaderInput";
import Main from "src/components/Main/Main";
import Navigation from "src/components/Nav/Navigation";
import { Empty } from "src/pages/Folder/FolderPage.styled";
import LinkSection from "src/pages/Folder/LinkSection";

function FolderPage() {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [id, setId] = useState(Math.ceil(Math.random() * 1));

  return (
    <>
      <Navigation id={id} setIsUser={setIsUser} page="folder" />
      <HeaderSearch id={id} isUser={isUser} />
      <Main>{isUser ? <LinkSection id={id} /> : <Empty>로그인 정보를 찾을 수 없습니다.</Empty>}</Main>
      <Footer />
    </>
  );
}

export default FolderPage;
