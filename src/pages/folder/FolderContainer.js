import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as S from "./FolderContainerStyle";
import { getAllFolders, getAllLinks } from "api/api";

import CardList from "components/card/CardList";
import Loading from "components/Loading";
import Searchbar from "components/searchbar/Searchbar";
import FolderHero from "components/hero/HeroAboutFolder";
import Categories from "components/Categories";
import Options from "components/Options";

const DEFAULT = "전체";
const USER_ID = 1;

export default function Folder() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");

  const { isLoading, error, wrappedFunction: getLinksAsyncFunc } = useFetch(getAllLinks);
  const { error: errorFolder, wrappedFunction: getFoldersAsyncFunc } = useFetch(getAllFolders);

  const handleSelectedFolder = (category) => {
    setSelected(category);
    changeFolderId(category);
  };

  const changeFolderId = (category) => {
    const selectedFolder = folders.find((folder) => folder.name === category);
    const selectedId = selectedFolder ? selectedFolder.id : "";
    setSelectedFolderId(selectedId);
  };

  const handleLoadedData = async () => {
    const { data: linkData } = await getLinksAsyncFunc(USER_ID, selectedFolderId);
    const { data: folderData } = await getFoldersAsyncFunc(USER_ID);

    setLinks(linkData);
    setFolders(folderData);
  };

  const folderNames = folders.map((folder) => folder.name);

  useEffect(() => {
    handleLoadedData();
  }, [selectedFolderId]);

  if (error || errorFolder) console.log(error || errorFolder);

  return (
    <main>
      <S.HeroContainer>
        <FolderHero />
      </S.HeroContainer>
      <S.Contents>
        <Searchbar />
        <S.MenuContainer>
          <Categories
            categories={[DEFAULT, ...folderNames]}
            selected={selected}
            onClick={handleSelectedFolder}
          />
          <S.AddFolderBtn>
            <span>폴더 추가</span>
            <S.IconAdd />
          </S.AddFolderBtn>
        </S.MenuContainer>
        {isLoading && <Loading />}
        {!isLoading && links.length === 0 ? (
          <S.Blank>저장된 링크가 없습니다</S.Blank>
        ) : (
          <>
            <S.MenuContainer>
              <S.SubTitle>{selected}</S.SubTitle>
              {selected !== DEFAULT && <Options />}
            </S.MenuContainer>
            <CardList links={links} />
          </>
        )}
      </S.Contents>
    </main>
  );
}
