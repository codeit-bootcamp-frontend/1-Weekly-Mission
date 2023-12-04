import * as React from "react";
import GlobalStyle from "../styles/global-styles";
import Nav from "../src/components/Folder/Nav";
import Footer from "../src/components/Folder/Footer";
import LinkAddInput from "../src/components/UI/LinkAddInput";
import FolderMain from "../src/components/Folder/Main/FolderMain";
import useGetAccount from "../src/hooks/useGetAccount";
import useGetSelectedFolder from "../src/hooks/useGetSelectedFolder";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FolderProvider } from "../src/context/FolderContext";
import EmptyLinkScreen from "../src/components/Folder/Main/EmptyLinkScreen";
import { SelectedFolderInfo } from "../src/types";
import { TABLET_SIZE } from "@/src/global/mediaQuery";

function Folder() {
  // const { id } = useParams();  (path='/folder/:id')
  const [userId, setUserId] = useState(1);
  const [success, setSuccess] = useState<boolean>(false);

  const account = useGetAccount(userId);
  const selectedFolder = useGetSelectedFolder(userId);
  useEffect(() => {
    setUserId(userId);
  }, []);

  if (selectedFolder) {
    const { data }: { data: SelectedFolderInfo[] } = selectedFolder;
    //console.log(data);  여기에 콘솔로그를 찍으면 6번~9번이 찍힙니다..디펜던시도 따로 없는데 왜 여러번 찍힐까요?

    return (
      <Layout>
        <GlobalStyle />
        <Nav account={account} setSuccess={setSuccess} />
        <Content>
          <TopArea>
            <LinkAddInput selectedFolder={data} />
          </TopArea>
          {success ? (
            <FolderProvider>{selectedFolder && <FolderMain userID={userId} selectedFolder={data} />}</FolderProvider>
          ) : (
            <EmptyLinkScreen>로그인이 필요한 페이지입니다🫥</EmptyLinkScreen>
          )}
        </Content>
        <Footer />
      </Layout>
    );
  } else return null;
}

export default Folder;

const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: space-around;

  padding: 6rem 32rem 9rem 32rem;
  gap: 0.8rem;
  background: var(--gray0);

  @media (max-width: 1124px) {
    padding: 6rem 20rem 9rem 20rem;
  }
  @media (max-width: ${TABLET_SIZE}) {
    padding: 6rem 3.25rem 9rem 3.25rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 최소 화면 높이만큼 컨텐츠 영역 확보 */
`;

const Content = styled.div`
  flex: 1;
`;
