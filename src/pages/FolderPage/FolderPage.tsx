import { useState, useEffect } from "react";
import { getFolder, getLink, getLinksFolderId } from "apis/api";
import * as S from "./FolderPage.style";
import Nav from 'components/Nav';
import AddLinkBar from 'components/AddLinkBar';
import SearchLinkBar from 'components/SearchLinkBar';
import CardList from 'components/CardList';
import FolderMenu from 'components/FolderMenu';
import Footer from 'components/Footer';

function FolderPage() {
  const [folderData, setFolderData] = useState([]);
  const [folderLink, setFolderLink] = useState([]);
  const [folderId, setFolderId] = useState(null);

  // 폴더 목록에 필요한 데이터 불러오기
  const getFolderList = async () => {
    const result = await getFolder();
    const { data } = result;
    setFolderData(data);
  }

  // 카드 데이터 불러오기
  const getFolderLink = async () => {
    const result = await getLink();
    const { data } = result;
    setFolderLink(data);
  }

  useEffect(() => {
    getFolderList();
    getFolderLink();
  }, []);

  // folderId에 맞는 폴더 리스트 조회
  const getFolderId = async (folderId: number) => {
    const result = await getLinksFolderId(folderId);
    const { data } = result;
    setFolderLink(data);
  }

  const handleClick = (folderId: number) => { setFolderId(folderId) };

  useEffect(()=>{
    if(!folderId) return;
    getFolderId(folderId);
  },[folderId])

  return (
    <>
    <Nav />
      <S.FolderPageSection>
        <S.Header>
          <AddLinkBar />
        </S.Header>
        <S.Main>
          <SearchLinkBar />
          <S.CardSection>
            <FolderMenu data={folderData} onClick={handleClick} id={folderId} />
            <CardList items={folderLink} />
          </S.CardSection>
        </S.Main>
        <Footer />
      </S.FolderPageSection>
    </>
  );
}

export default FolderPage;